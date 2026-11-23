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
let quizRenderRun = 0;

function resetQuizContent() {
  quizRenderRun += 1;
  quizContent.replaceChildren();
  quizContent.scrollTop = 0;
}

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
    loadMathQuiz();
  }
}

function textPart(value) {
  const item = document.createElement("span");
  item.textContent = String(value);
  return item;
}

function makeMathQuiz(questions) {
  const quiz = document.createElement("div");
  quiz.className = "math-quiz";

  const header = document.createElement("div");
  header.className = "math-quiz-header";
  const subtitle = document.createElement("div");
  subtitle.className = "math-quiz-subtitle";
  subtitle.textContent = "Math";
  const title = document.createElement("div");
  title.className = "math-quiz-title";
  title.textContent = "Times Tables";
  header.append(subtitle, title);

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
      input.classList.remove("is-right", "is-wrong");
      mark.className = "math-quiz-mark";
      mark.textContent = "";
      mark.removeAttribute("aria-label");
    });

    input.addEventListener("keydown", event => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      if (!/^\d+$/.test(input.value.trim())) return;

      const correctAnswer = question.blank === "a" ? question.a : question.b;
      const correct = Number(input.value) === correctAnswer;
      const state = correct ? "is-right" : "is-wrong";

      input.dataset.checked = "true";
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

  quiz.append(header, grid);
  quizContent.replaceChildren(quiz);
  quizContent.scrollTop = 0;
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
