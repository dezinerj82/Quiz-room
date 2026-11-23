const clientId = "574290651847-gr406870mug7sfhv4oamvjg4jtvdc8l3.apps.googleusercontent.com";
const scopes = "openid email profile https://www.googleapis.com/auth/drive.file";
const storageKey = "quiz-room-google-session-v1";
const frame = document.getElementById("site-frame");
const loginStage = document.getElementById("login-stage");
const loginButton = document.getElementById("google-login");
const statusMessage = document.getElementById("login-status");

let tokenClient;
let accessToken = null;

function scaleFrame() {
  const width = parseFloat(getComputedStyle(frame).width);
  const height = parseFloat(getComputedStyle(frame).height);
  const scale = Math.min(1, window.innerWidth / width, window.innerHeight / height);
  frame.style.setProperty("--scale", String(scale));
}

function clearSavedLogin() {
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    // The browser may have storage disabled.
  }
  accessToken = null;
}

function getSavedLogin() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return null;

    const saved = JSON.parse(raw);
    if (
      typeof saved.token !== "string" ||
      !saved.token ||
      !Number.isFinite(saved.expiresAt) ||
      saved.expiresAt <= Date.now() + 60000
    ) {
      clearSavedLogin();
      return null;
    }
    return saved.token;
  } catch (error) {
    clearSavedLogin();
    return null;
  }
}

function saveLogin(response) {
  const lifetime = Number(response.expires_in);
  if (!Number.isFinite(lifetime) || lifetime <= 60) return;

  try {
    localStorage.setItem(storageKey, JSON.stringify({
      token: response.access_token,
      expiresAt: Date.now() + lifetime * 1000
    }));
  } catch (error) {
    // Login still works if browser storage is unavailable.
  }
}

function showError(message) {
  loginStage.style.display = "";
  loginButton.disabled = false;
  statusMessage.textContent = message;
  statusMessage.hidden = false;
}

function showMainPage() {
  loginStage.remove();
  document.getElementById("main-page").hidden = false;
}

async function checkGoogleToken(token) {
  const headers = { Authorization: `Bearer ${token}` };
  const [accountResult, driveResult] = await Promise.all([
    fetch("https://www.googleapis.com/oauth2/v3/userinfo", { headers }),
    fetch("https://www.googleapis.com/drive/v3/files?pageSize=1&fields=files(id)", { headers })
  ]);

  if (!accountResult.ok || !driveResult.ok) {
    throw new Error("Google connection failed.");
  }

  const account = await accountResult.json();
  if (!account.sub) {
    throw new Error("Google account could not be confirmed.");
  }
}

async function finishLogin(response) {
  if (response.error || !response.access_token) {
    showError("Google sign-in was not completed.");
    return;
  }

  try {
    await checkGoogleToken(response.access_token);
    accessToken = response.access_token;
    saveLogin(response);
    showMainPage();
  } catch (error) {
    clearSavedLogin();
    showError("Could not connect to Google Drive. Please try again.");
  }
}

async function restoreLogin() {
  const savedToken = getSavedLogin();
  if (!savedToken) return;

  loginStage.style.display = "none";
  try {
    await checkGoogleToken(savedToken);
    accessToken = savedToken;
    showMainPage();
  } catch (error) {
    clearSavedLogin();
    loginStage.style.display = "";
  }
}

loginButton.addEventListener("click", () => {
  statusMessage.hidden = true;

  if (!window.google || !google.accounts || !google.accounts.oauth2) {
    showError("Google sign-in is not ready. Please try again.");
    return;
  }

  if (!tokenClient) {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: scopes,
      callback: finishLogin,
      error_callback: () => showError("Google sign-in was not completed.")
    });
  }

  loginButton.disabled = true;
  try {
    tokenClient.requestAccessToken({ prompt: "select_account" });
  } catch (error) {
    showError("Google sign-in is not ready. Please try again.");
  }
});

document.getElementById("logout").addEventListener("click", () => {
  clearSavedLogin();
  window.location.reload();
});

const homeMenuButton = document.getElementById("menu-home");
const quizMenuButton = document.getElementById("menu-quiz");
const quizStepLabel = document.getElementById("quiz-step-label");
const quizStepActions = document.getElementById("quiz-step-actions");
const quizSubjects = ["Math"];
let quizMode = null;

function setMainMenu(activeButton) {
  for (const button of [homeMenuButton, quizMenuButton]) {
    const active = button === activeButton;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  }
}

function quizOption(text, onClick, selected = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.classList.toggle("is-active", selected);
  if (selected) button.setAttribute("aria-pressed", "true");
  button.addEventListener("click", onClick);
  return button;
}

const quizContent = document.getElementById("quiz-content");
const quizToolbar = document.getElementById("quiz-toolbar");
const quizCount = document.getElementById("quiz-count");
const quizProgressTrack = document.getElementById("quiz-progress-track");
const quizProgressFill = document.getElementById("quiz-progress-fill");
const quizClock = document.getElementById("quiz-clock");
const quizExitButton = document.getElementById("quiz-exit");
const quizFinishButton = document.getElementById("quiz-finish");
let quizRenderRun = 0;
let activeQuiz = null;
let quizTimerId = null;
let quizDeadline = 0;
let quizSaving = false;

function stopQuizTimer() {
  if (quizTimerId !== null) {
    clearInterval(quizTimerId);
    quizTimerId = null;
  }
}

function resetQuizContent() {
  stopQuizTimer();
  quizRenderRun += 1;
  activeQuiz = null;
  quizSaving = false;
  quizToolbar.hidden = true;
  quizFinishButton.hidden = true;
  quizFinishButton.disabled = false;
  quizFinishButton.textContent = "Finish";
  quizExitButton.disabled = false;
  quizContent.replaceChildren();
  quizContent.scrollTop = 0;
}

function updateQuizProgress() {
  if (!activeQuiz) return;
  const checked = activeQuiz.answers.filter(answer => answer.dataset.checked === "true").length;
  const total = activeQuiz.answers.length;
  quizCount.textContent = checked + " / " + total;
  quizProgressFill.style.width = (checked / total * 100) + "%";
  quizProgressTrack.setAttribute("aria-valuemax", String(total));
  quizProgressTrack.setAttribute("aria-valuenow", String(checked));
  quizFinishButton.hidden = checked !== total || activeQuiz.expired || activeQuiz.completed;
}

function updateQuizClock() {
  if (!activeQuiz || activeQuiz.completed || activeQuiz.expired) return;
  const remaining = Math.max(0, Math.ceil((quizDeadline - Date.now()) / 1000));
  quizClock.textContent =
    String(Math.floor(remaining / 60)).padStart(2, "0") + ":" +
    String(remaining % 60).padStart(2, "0");

  if (remaining === 0) {
    stopQuizTimer();
    activeQuiz.expired = true;
    activeQuiz.answers.forEach(answer => { answer.disabled = true; });
    quizFinishButton.hidden = true;
  }
}

function startQuiz(questions, answers) {
  stopQuizTimer();
  activeQuiz = {
    questions,
    answers,
    startedAt: new Date().toISOString(),
    completed: false,
    expired: false
  };
  quizToolbar.hidden = false;
  quizExitButton.disabled = false;
  quizFinishButton.disabled = false;
  quizFinishButton.textContent = "Finish";
  quizFinishButton.hidden = true;
  quizDeadline = Date.now() + 30 * 60 * 1000;
  updateQuizProgress();
  updateQuizClock();
  quizTimerId = setInterval(updateQuizClock, 1000);
}

function freshScoreToken() {
  const cached = getSavedLogin();
  if (cached) return Promise.resolve(cached);

  return new Promise((resolve, reject) => {
    if (!window.google || !google.accounts || !google.accounts.oauth2) {
      reject(new Error("Google sign-in unavailable."));
      return;
    }

    const client = google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: scopes,
      callback: response => {
        if (response.error || !response.access_token) {
          reject(new Error("Google sign-in was not completed."));
          return;
        }
        accessToken = response.access_token;
        saveLogin(response);
        resolve(response.access_token);
      },
      error_callback: () => reject(new Error("Google sign-in was not completed."))
    });

    try {
      client.requestAccessToken({ prompt: "select_account" });
    } catch (error) {
      reject(error);
    }
  });
}

async function scoreDriveRequest(url, token, options = {}) {
  const headers = { Authorization: "Bearer " + token, ...options.headers };
  const response = await fetch(url, { ...options, headers });
  if (response.status === 401) clearSavedLogin();
  if (!response.ok) throw new Error("Google Drive could not save the score.");
  return response.json();
}

async function saveCompletedScore(token, score) {
  const q = encodeURIComponent(
    "name = 'Quiz Room' and mimeType = 'application/vnd.google-apps.folder' and trashed = false"
  );
  const found = await scoreDriveRequest(
    "https://www.googleapis.com/drive/v3/files?q=" + q + "&fields=files(id)&pageSize=100",
    token
  );
  let folderId = found.files?.[0]?.id;

  if (!folderId) {
    const created = await scoreDriveRequest(
      "https://www.googleapis.com/drive/v3/files?fields=id",
      token,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Quiz Room",
          mimeType: "application/vnd.google-apps.folder"
        })
      }
    );
    folderId = created.id;
  }

  if (!folderId) throw new Error("Google Drive folder is unavailable.");

  const boundary = "quiz_room_" + Date.now() + "_" + Math.floor(Math.random() * 1000000);
  const metadata = {
    name: "Math Times Tables " + score.completedAt.replace(/[:.]/g, "-") + ".json",
    mimeType: "application/json",
    parents: [folderId]
  };
  const body = [
    "--" + boundary,
    "Content-Type: application/json; charset=UTF-8",
    "",
    JSON.stringify(metadata),
    "--" + boundary,
    "Content-Type: application/json",
    "",
    JSON.stringify(score),
    "--" + boundary + "--",
    ""
  ].join("\r\n");

  const saved = await scoreDriveRequest(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",
    token,
    {
      method: "POST",
      headers: { "Content-Type": "multipart/related; boundary=" + boundary },
      body
    }
  );
  if (!saved.id) throw new Error("Google Drive did not confirm the score.");
}

async function finishMathQuiz() {
  const session = activeQuiz;
  if (!session || session.completed || session.expired || quizSaving ||
      session.answers.some(answer => answer.dataset.checked !== "true")) return;

  quizSaving = true;
  stopQuizTimer();
  quizExitButton.disabled = true;
  quizFinishButton.disabled = true;
  quizFinishButton.textContent = "Saving";

  const score = {
    subject: "Math",
    quiz: "Times Tables",
    score: session.answers.filter(answer => answer.dataset.correct === "true").length,
    total: session.answers.length,
    questionIds: session.questions.map(question => question.id),
    startedAt: session.startedAt,
    completedAt: new Date().toISOString()
  };

  try {
    const token = await freshScoreToken();
    await saveCompletedScore(token, score);
    if (activeQuiz !== session) return;
    session.completed = true;
    session.answers.forEach(answer => { answer.readOnly = true; });
    quizFinishButton.textContent = "Saved";
    quizFinishButton.disabled = true;
  } catch (error) {
    if (activeQuiz !== session) return;
    quizFinishButton.textContent = "Retry save";
    quizFinishButton.disabled = false;
    quizFinishButton.title = "Could not save to Google Drive. Please try again.";
  } finally {
    quizSaving = false;
    if (activeQuiz === session) quizExitButton.disabled = false;
  }
}

quizExitButton.addEventListener("click", showMathQuizList);
quizFinishButton.addEventListener("click", finishMathQuiz);

function openQuizMenu() {
  quizMode = null;
  resetQuizContent();
  setMainMenu(quizMenuButton);
  quizStepLabel.textContent = "Choose a mode";
  quizStepActions.replaceChildren(
    quizOption("Quiz", () => chooseMode("Quiz"))
  );
}

function chooseMode(mode) {
  quizMode = mode;
  resetQuizContent();
  quizStepLabel.textContent = "Choose a subject";
  quizStepActions.replaceChildren(
    quizOption("Back", openQuizMenu),
    ...quizSubjects.map(subject => quizOption(subject, () => selectQuizSubject(subject)))
  );
}

function selectQuizSubject(subject) {
  quizStepLabel.textContent = subject + " · " + quizMode;
  for (const button of quizStepActions.querySelectorAll("button")) {
    const selected = button.textContent === subject;
    button.classList.toggle("is-active", selected);
    if (selected) button.setAttribute("aria-pressed", "true");
    else button.removeAttribute("aria-pressed");
  }
  if (subject === "Math" && quizMode === "Quiz") {
    showMathQuizList();
  }
}

function showMathQuizList() {
  resetQuizContent();

  const list = document.createElement("div");
  list.className = "math-quiz";
  const header = document.createElement("div");
  header.className = "math-quiz-header";
  const title = document.createElement("div");
  title.className = "math-quiz-title";
  title.textContent = "Choose Quiz";
  header.append(title);

  const options = document.createElement("nav");
  options.className = "menu-buttons";
  options.setAttribute("aria-label", "Math quizzes");
  options.append(quizOption("Times Tables", loadMathQuiz));

  list.append(header, options);
  quizContent.replaceChildren(list);
  quizContent.scrollTop = 0;
}

function textPart(value) {
  const item = document.createElement("span");
  item.textContent = String(value);
  return item;
}

function makeMathQuiz(questions) {
  const quiz = document.createElement("div");
  quiz.className = "math-quiz";

  const grid = document.createElement("div");
  grid.className = "math-quiz-grid";
  const answers = [];
  questions.forEach(question => {
    const card = document.createElement("div");
    card.className = "math-quiz-card";
    card.dataset.questionId = question.id;

    const row = document.createElement("div");
    row.className = "math-quiz-row";
    const equation = document.createElement("div");
    equation.className = "math-quiz-equation";
    const input = document.createElement("input");
    input.className = "math-quiz-answer";
    input.type = "text";
    input.inputMode = "numeric";
    input.maxLength = 2;
    input.autocomplete = "off";
    input.setAttribute("aria-label", "Missing number in multiplication equation");

    equation.append(
      question.blank === "a" ? input : textPart(question.a),
      textPart("×"),
      question.blank === "b" ? input : textPart(question.b),
      textPart("="),
      textPart(question.a * question.b)
    );

    const mark = document.createElement("span");
    mark.className = "math-quiz-mark";
    mark.setAttribute("role", "status");
    row.append(equation, mark);
    card.append(row);
    grid.append(card);
    answers.push(input);

    input.addEventListener("input", () => {
      input.dataset.checked = "false";
      input.dataset.correct = "false";
      input.classList.remove("is-right", "is-wrong");
      mark.className = "math-quiz-mark";
      mark.textContent = "";
      mark.removeAttribute("aria-label");
      updateQuizProgress();
    });

    input.addEventListener("keydown", event => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      if (!activeQuiz || activeQuiz.expired || activeQuiz.completed || quizSaving) return;
      if (!/^\d+$/.test(input.value.trim())) return;

      const correctAnswer = question.blank === "a" ? question.a : question.b;
      const correct = Number(input.value) === correctAnswer;
      const state = correct ? "is-right" : "is-wrong";

      input.dataset.checked = "true";
      input.dataset.correct = String(correct);
      updateQuizProgress();
      input.classList.remove("is-right", "is-wrong");
      input.classList.add(state);
      mark.className = "math-quiz-mark " + state;
      mark.textContent = correct ? "✓" : "✕";
      mark.setAttribute("aria-label", correct ? "Correct" : "Incorrect");

      const current = answers.indexOf(input);
      const next = [...answers.slice(current + 1), ...answers.slice(0, current)]
        .find(answer => answer.dataset.checked !== "true");

      if (next) {
        next.focus({ preventScroll: true });
        next.scrollIntoView({ block: "nearest" });
      } else {
        input.blur();
      }
    });
  });

  quiz.append(grid);
  quizContent.replaceChildren(quiz);
  quizContent.scrollTop = 0;
  startQuiz(questions, answers);
}

async function loadMathQuiz() {
  resetQuizContent();
  const currentRun = quizRenderRun;

  try {
    const response = await fetch("./id/math-times-tables.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Question IDs are unavailable.");
    const bank = await response.json();
    if (!Array.isArray(bank) || bank.length < 10) throw new Error("Missing questions.");
    if (currentRun !== quizRenderRun) return;

    const shuffled = [...bank];
    for (let index = shuffled.length - 1; index > 0; index--) {
      const pick = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[pick]] = [shuffled[pick], shuffled[index]];
    }
    const usedPairs = new Set();
    const chosen = shuffled.filter(question => {
      const pair = [question.a, question.b].sort((a, b) => a - b).join("-");
      if (usedPairs.has(pair)) return false;
      usedPairs.add(pair);
      return true;
    }).slice(0, 10);
    if (chosen.length !== 10) throw new Error("Missing distinct questions.");
    makeMathQuiz(chosen);
  } catch (error) {
    if (currentRun !== quizRenderRun) return;
    quizContent.textContent = "Math quiz could not load. Please try again.";
  }
}

homeMenuButton.addEventListener("click", () => {
  quizMode = null;
  resetQuizContent();
  setMainMenu(homeMenuButton);
  quizStepLabel.textContent = "";
  quizStepActions.replaceChildren();
});
quizMenuButton.addEventListener("click", openQuizMenu);

window.addEventListener("resize", scaleFrame);
scaleFrame();
restoreLogin();
