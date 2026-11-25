const clientId = "574290651847-gr406870mug7sfhv4oamvjg4jtvdc8l3.apps.googleusercontent.com";
const scopes = "openid email profile https://www.googleapis.com/auth/drive.file";
const storageKey = "quiz-room-google-session-v1";
const frame = document.getElementById("site-frame");
const loginStage = document.getElementById("login-stage");
const loginButton = document.getElementById("google-login");
const statusMessage = document.getElementById("login-status");

let tokenClient;
let accessToken = null;
let signedInUserId = null;

function scaleFrame() {
  const width = parseFloat(getComputedStyle(frame).width);
  const height = parseFloat(getComputedStyle(frame).height);
  const scale = Math.min(1, window.innerWidth / width, window.innerHeight / height);
  frame.style.setProperty("--scale", String(scale));
  frame.style.visibility = "visible";
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
  loginStage.style.display = "flex";
  loginButton.disabled = false;
  statusMessage.textContent = message;
  statusMessage.hidden = false;
}

function showMainPage() {
  loginStage.remove();
  document.getElementById("main-page").hidden = false;
  openHomePage();
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
  return account.sub;
}

async function finishLogin(response) {
  if (response.error || !response.access_token) {
    showError("Google sign-in was not completed.");
    return;
  }

  try {
    signedInUserId = await checkGoogleToken(response.access_token);
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
  if (!savedToken) {
    loginStage.style.display = "flex";
    return;
  }

  try {
    signedInUserId = await checkGoogleToken(savedToken);
    accessToken = savedToken;
    showMainPage();
  } catch (error) {
    clearSavedLogin();
    loginStage.style.display = "flex";
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
const quizStepBack = document.getElementById("quiz-step-back");
// Only show levels, activities and subjects that have quizzes available.
const quizCatalog = [
  { level: "Basic", activity: "Quiz", subject: "Math", type: "Skill Builder", name: "Times Tables", open: loadMathQuiz },
  { level: "Basic", activity: "Quiz", subject: "Math", type: "Brain Challenge", name: "Basic Knowledge", open: loadPM3MathBasics }
];
let quizLevel = null;
let quizMode = null;
let quizSubject = null;
let selectedQuizType = "Skill Builder";
const quizTypes = ["Skill Builder", "Brain Booster", "Brain Challenge"];
const homeSubjects = ["Math", "English", "Malay", "Korean", "Science", "History", "Geography"];
let homeSubject = "Math";
let homeScores = null;
let homeRun = 0;

function quizChoices(key, matches) {
  return [...new Set(quizCatalog.filter(matches).map(quiz => quiz[key]))];
}

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
const quizNextButton = document.getElementById("quiz-next");
const quizToolbarName = document.getElementById("quiz-toolbar-name");
const quizTypeActions = document.getElementById("quiz-type-actions");
const quizToolbarMiddle = document.getElementById("quiz-toolbar-middle");
const quizToolbarActions = document.getElementById("quiz-toolbar-actions");
const quizToolbarReserve = quizToolbar.querySelector(":scope > .quiz-advance-reserve");
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

function setStageNavigationDisabled(disabled) {
  document.querySelectorAll("#menu-stage button, #navigation-stage button")
    .forEach(button => { button.disabled = disabled; });
}

function resetQuizContent() {
  stopQuizTimer();
  setStageNavigationDisabled(false);
  quizRenderRun += 1;
  activeQuiz = null;
  quizSaving = false;
  quizToolbar.hidden = true;
  quizTypeActions.hidden = true;
  quizTypeActions.style.display = "none";
  quizToolbarMiddle.style.removeProperty("display");
  quizToolbarActions.style.removeProperty("display");
  quizToolbarReserve.hidden = false;
  quizFinishButton.hidden = true;
  quizNextButton.hidden = true;
  quizNextButton.disabled = true;
  quizFinishButton.disabled = false;
  quizFinishButton.textContent = "Finish";
  quizExitButton.disabled = false;
  hideEnglishTooltip();
  quizContent.classList.remove("math-basics-card", "menu-buttons", "home-dashboard");
  quizContent.removeAttribute("data-question-id");
  quizContent.removeAttribute("role");
  quizContent.removeAttribute("aria-label");
  quizContent.style.removeProperty("overflow");
  quizContent.style.removeProperty("align-items");
  quizContent.style.removeProperty("flex-wrap");
  quizContent.style.removeProperty("align-content");
  homeRun += 1;
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
  if (activeQuiz.kind === "pm3-basics") {
    const current = activeQuiz.currentIndex;
    const answered = activeQuiz.answers[current].dataset.checked === "true";
    quizNextButton.hidden = activeQuiz.completed || activeQuiz.expired ||
      current === total - 1 || !answered;
    quizNextButton.disabled = false;
    quizFinishButton.hidden = activeQuiz.expired ||
      !(current === total - 1 && checked === total);
  } else {
    quizNextButton.hidden = true;
    quizFinishButton.hidden = checked !== total || activeQuiz.expired;
  }
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
    quizContent.querySelectorAll("button, input").forEach(control => { control.disabled = true; });
    quizNextButton.hidden = true;
    quizFinishButton.hidden = true;
  }
}

function startQuiz(questions, answers) {
  stopQuizTimer();
  setStageNavigationDisabled(true);
  activeQuiz = {
    questions,
    answers,
    startedAt: new Date().toISOString(),
    completed: false,
    expired: false
  };
  quizToolbar.hidden = false;
  quizTypeActions.hidden = true;
  quizTypeActions.style.display = "none";
  quizToolbarReserve.hidden = false;
  quizToolbarMiddle.style.removeProperty("display");
  quizToolbarActions.style.removeProperty("display");
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

  const scoreFolderQuery = encodeURIComponent(
    "name = 'Scores' and '" + folderId +
    "' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false"
  );
  const existingScoreFolders = await scoreDriveRequest(
    "https://www.googleapis.com/drive/v3/files?q=" + scoreFolderQuery +
    "&fields=files(id)&pageSize=100",
    token
  );
  let scoresFolderId = existingScoreFolders.files?.[0]?.id;

  if (!scoresFolderId) {
    const scoreFolder = await scoreDriveRequest(
      "https://www.googleapis.com/drive/v3/files?fields=id",
      token,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Scores",
          mimeType: "application/vnd.google-apps.folder",
          parents: [folderId]
        })
      }
    );
    scoresFolderId = scoreFolder.id;
  }

  if (!scoresFolderId) throw new Error("Google Drive Scores folder is unavailable.");

  const boundary = "quiz_room_" + Date.now() + "_" + Math.floor(Math.random() * 1000000);
  const metadata = {
    name: "Math " + score.quiz + " " + score.completedAt.replace(/[:.]/g, "-") + ".json",
    mimeType: "application/json",
    parents: [scoresFolderId]
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

function showMathQuizScore(score) {
  const result = document.createElement("div");
  result.className = "math-quiz-score";

  const label = document.createElement("span");
  label.className = "math-quiz-title";
  label.textContent = "Score";

  const dots = document.createElement("div");
  dots.className = "math-quiz-score-dots";
  dots.setAttribute("aria-hidden", "true");
  for (let index = 0; index < score.total; index++) {
    const dot = document.createElement("span");
    if (index < score.score) dot.className = "is-correct";
    dots.append(dot);
  }

  const value = document.createElement("span");
  value.className = "math-quiz-title math-quiz-score-value";
  value.textContent = score.score + " / " + score.total;

  result.append(label, dots, value);
  quizContent.classList.remove("math-basics-card");
  quizContent.removeAttribute("data-question-id");
  quizContent.replaceChildren(result);
  quizContent.scrollTop = 0;
}

async function finishMathQuiz() {
  const session = activeQuiz;
  if (!session || session.completed || session.expired || quizSaving ||
      session.answers.some(answer => answer.dataset.checked !== "true")) return;

  quizSaving = true;
  quizNextButton.hidden = true;
  stopQuizTimer();
  quizFinishButton.disabled = true;
  quizFinishButton.textContent = "Finish";
  quizFinishButton.title = "";

  if (!session.finalScore) {
    session.finalScore = {
      subject: "Math",
      quiz: session.quizName || "Times Tables",
      score: session.answers.filter(answer => answer.dataset.correct === "true").length,
      total: session.answers.length,
      questionIds: session.questions.map(question => question.id),
      startedAt: session.startedAt,
      completedAt: new Date().toISOString()
    };
    session.answers.forEach(answer => { answer.readOnly = true; });
    showMathQuizScore(session.finalScore);
  }

  try {
    const token = await freshScoreToken();
    await saveCompletedScore(token, session.finalScore);
    if (activeQuiz !== session) return;
    session.completed = true;
    quizFinishButton.disabled = true;
    quizExitButton.disabled = false;
  } catch (error) {
    if (activeQuiz !== session) return;
    quizFinishButton.textContent = "Retry save";
    quizFinishButton.disabled = false;
    quizFinishButton.title = "Could not save to Google Drive. Please try again.";
  } finally {
    if (activeQuiz === session) quizSaving = false;
  }
}


/* Home scores use only saved records from the signed-in Google Drive. */
function makeHomeElement(tag, cls, text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
}

function makeHomeSvg(tag, props) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(props).forEach(([name, value]) => node.setAttribute(name, String(value)));
  return node;
}

function showHomeSubject() {
  if (!quizContent.classList.contains("home-dashboard")) return;
  quizToolbarName.textContent = homeSubject;
  quizStepActions.replaceChildren(...homeSubjects.map(subject =>
    quizOption(subject, () => {
      homeSubject = subject;
      showHomeSubject();
    }, subject === homeSubject)
  ));

  const historyCard = makeHomeElement("section", "home-dashboard-card");
  historyCard.setAttribute("aria-label", "Quiz history");
  const historyHeader = makeHomeElement("div", "home-dashboard-history-header");
  const historyControls = makeHomeElement("div", "menu-buttons home-dashboard-history-controls");
  const historyUp = makeHomeElement("button", "", "▲");
  const historyDown = makeHomeElement("button", "", "▼");
  historyUp.type = "button";
  historyDown.type = "button";
  historyUp.setAttribute("aria-label", "Scroll quiz history up");
  historyDown.setAttribute("aria-label", "Scroll quiz history down");
  historyControls.append(historyUp, historyDown);
  historyHeader.append(makeHomeElement("div", "math-basics-question-text", "Quiz history"), historyControls);
  historyCard.append(historyHeader);
  const history = makeHomeElement("div", "home-dashboard-history");
  historyCard.append(history);

  const updateHistoryControls = () => {
    const bottom = Math.max(0, history.scrollHeight - history.clientHeight);
    historyUp.disabled = history.scrollTop <= 1;
    historyDown.disabled = history.scrollTop >= bottom - 1;
  };
  const scrollHistory = direction => {
    const first = history.querySelector(".home-dashboard-history-row");
    if (!first) return;
    const gap = parseFloat(getComputedStyle(history).rowGap) || 0;
    history.scrollBy({ top: direction * (first.offsetHeight + gap), behavior: "smooth" });
  };
  historyUp.addEventListener("click", () => scrollHistory(-1));
  historyDown.addEventListener("click", () => scrollHistory(1));
  history.addEventListener("scroll", updateHistoryControls);

  const chartCard = makeHomeElement("section", "home-dashboard-card");
  chartCard.setAttribute("aria-label", "Quiz score average");
  chartCard.append(makeHomeElement("div", "math-basics-question-text", "Quiz score average"));
  const chart = makeHomeElement("div", "home-dashboard-chart");
  const svg = makeHomeSvg("svg", {viewBox:"0 0 200 200", class:"home-dashboard-donut", role:"img", "aria-label":"Overall subject average"});
  const circumference = 2 * Math.PI * 73;
  svg.append(makeHomeSvg("circle", {cx:100,cy:100,r:73,fill:"none",stroke:"#ffffff","stroke-width":20}));
  const ring = makeHomeSvg("circle", {cx:100,cy:100,r:73,fill:"none",stroke:"#a4dfc4","stroke-width":20,"stroke-linecap":"round",transform:"rotate(-90 100 100)","stroke-dasharray":"0 "+circumference});
  svg.append(ring);
  const number = makeHomeSvg("text", {x:100,y:104,"text-anchor":"middle","font-size":38,"font-weight":700,fill:"#171717"});
  number.textContent = "—";
  const label = makeHomeSvg("text", {x:100,y:127,"text-anchor":"middle","font-size":13,fill:"#777"});
  label.textContent = homeSubject + " average";
  svg.append(number,label);
  chart.append(svg);
  chartCard.append(chart);
  const note = makeHomeElement("div","home-dashboard-note");
  chartCard.append(note);
  quizContent.replaceChildren(historyCard,chartCard);

  if (homeScores === null) {
    updateHistoryControls();
    return;
  }
  if (homeScores === false) {
    history.append(makeHomeElement("span","","Could not load scores."));
    updateHistoryControls();
    return;
  }
  const entries = homeScores.filter(item => item.subject === homeSubject)
    .sort((a,b) => new Date(b.date) - new Date(a.date));
  if (!entries.length) {
    history.append(makeHomeElement("span","","No quiz scores yet."));
    note.append(makeHomeElement("span","home-dashboard-detail","No scores yet to suggest a focus area."));
    updateHistoryControls();
    return;
  }
  let earned=0,possible=0;
  const byQuiz=new Map();
  for (const entry of entries) {
    earned+=entry.score;
    possible+=entry.total;
    const row=makeHomeElement("div","home-dashboard-history-row");
    row.append(makeHomeElement("span","home-dashboard-history-name",entry.quiz));
    const date=new Date(entry.date);
    row.append(makeHomeElement("span","home-dashboard-detail",Number.isNaN(date.getTime())?"":date.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})));
    row.append(makeHomeElement("span","home-dashboard-score",entry.score+" / "+entry.total));
    history.append(row);
    const aggregate=byQuiz.get(entry.quiz)||{score:0,total:0};
    aggregate.score+=entry.score;
    aggregate.total+=entry.total;
    byQuiz.set(entry.quiz,aggregate);
  }
  updateHistoryControls();
  const average=Math.round(100*earned/possible);
  number.textContent=average+"%";
  ring.setAttribute("stroke-dasharray",(circumference*average/100)+" "+circumference);
  const weakest=[...byQuiz.entries()].sort((a,b)=>(a[1].score/a[1].total)-(b[1].score/b[1].total))[0];
  if (weakest && weakest[1].score<weakest[1].total) {
    note.append(makeHomeElement("span","home-dashboard-focus","Focus on: "+weakest[0]));
    note.append(makeHomeElement("span","home-dashboard-detail","Practice this quiz again to improve."));
  }
}

async function getHomeScores(token) {
  const base="https://www.googleapis.com/drive/v3/files";
  const mime="application/vnd.google-apps.folder";
  const lookup=async query => {
    const response=await scoreDriveRequest(base+"?q="+encodeURIComponent(query)+"&fields=files(id)&pageSize=100",token);
    return response.files?.[0]?.id||null;
  };
  const parent=await lookup("name = 'Quiz Room' and mimeType = '"+mime+"' and trashed = false");
  if (!parent) return [];
  const scoreFolder=await lookup("name = 'Scores' and '"+parent+"' in parents and mimeType = '"+mime+"' and trashed = false");
  if (!scoreFolder) return [];

  const query="'"+scoreFolder+"' in parents and mimeType = 'application/json' and trashed = false";
  const files=[];
  let page="";
  do {
    const url=base+"?q="+encodeURIComponent(query)+"&fields="+encodeURIComponent("nextPageToken,files(id,createdTime)")+
      "&pageSize=1000"+(page?"&pageToken="+encodeURIComponent(page):"");
    const response=await scoreDriveRequest(url,token);
    files.push(...(response.files||[]));
    page=response.nextPageToken||"";
  } while(page);

  const items=[];
  for (let offset=0;offset<files.length;offset+=8) {
    const batch=await Promise.all(files.slice(offset,offset+8).map(async file => {
      const score=await scoreDriveRequest(base+"/"+encodeURIComponent(file.id)+"?alt=media",token);
      if (typeof score.subject!=="string" || typeof score.quiz!=="string" ||
          !Number.isFinite(score.score) || !Number.isFinite(score.total) ||
          score.total<=0 || score.score<0 || score.score>score.total) return null;
      return {subject:score.subject,quiz:score.quiz,score:score.score,total:score.total,
        date:score.completedAt||file.createdTime||""};
    }));
    items.push(...batch.filter(Boolean));
  }
  return items;
}

function openHomePage() {
  quizLevel=null;
  quizMode=null;
  quizSubject=null;
  homeSubject="Math";
  homeScores=null;
  resetQuizContent();
  const run=homeRun;
  setMainMenu(homeMenuButton);
  quizStepLabel.textContent="Choose a subject";
  quizStepBack.replaceChildren();
  quizToolbarReserve.hidden=true;
  quizToolbarMiddle.style.display="none";
  quizToolbarActions.style.display="none";
  quizTypeActions.hidden=true;
  quizTypeActions.style.display="none";
  quizToolbar.hidden=false;
  quizContent.classList.add("home-dashboard");
  quizContent.setAttribute("aria-label","Home dashboard");
  showHomeSubject();

  freshScoreToken().then(getHomeScores).then(result => {
    if (run!==homeRun || !quizContent.classList.contains("home-dashboard")) return;
    homeScores=result;
    showHomeSubject();
  }).catch(() => {
    if (run!==homeRun || !quizContent.classList.contains("home-dashboard")) return;
    homeScores=false;
    showHomeSubject();
  });
}

quizExitButton.addEventListener("click", showMathQuizList);
quizFinishButton.addEventListener("click", finishMathQuiz);

function openQuizMenu() {
  quizLevel = null;
  quizMode = null;
  quizSubject = null;
  resetQuizContent();
  setMainMenu(quizMenuButton);
  quizStepLabel.textContent = "Choose a level";
  quizStepActions.replaceChildren(
    ...quizChoices("level", () => true).map(level =>
      quizOption(level, () => selectQuizLevel(level)))
  );
  quizStepBack.replaceChildren();
}

function selectQuizLevel(level) {
  quizLevel = level;
  quizMode = null;
  quizSubject = null;
  resetQuizContent();
  quizStepLabel.textContent = "Choose an activity";
  quizStepActions.replaceChildren(
    ...quizChoices("activity", quiz => quiz.level === level).map(activity =>
      quizOption(activity, () => chooseMode(activity)))
  );
  quizStepBack.replaceChildren(quizOption("Back", openQuizMenu));
}

function chooseMode(mode) {
  quizMode = mode;
  quizSubject = null;
  resetQuizContent();
  quizStepLabel.textContent = "Choose a subject";
  quizStepActions.replaceChildren(
    ...quizChoices("subject", quiz =>
      quiz.level === quizLevel && quiz.activity === mode).map(subject =>
      quizOption(subject, () => selectQuizSubject(subject)))
  );
  quizStepBack.replaceChildren(quizOption("Back", () => selectQuizLevel(quizLevel)));
}

function selectQuizSubject(subject) {
  quizSubject = subject;
  selectedQuizType = "Skill Builder";
  quizStepLabel.textContent = "Choose a subject";
  quizStepActions.replaceChildren(
    quizOption(subject, () => {}, true)
  );
  quizStepBack.replaceChildren(quizOption("Back", () => chooseMode(quizMode)));
  showMathQuizList();
}

function showMathQuizList() {
  resetQuizContent();
  quizToolbarName.textContent = "Choose quiz type";
  quizTypeActions.replaceChildren(...quizTypes.map(type =>
    quizOption(type, () => {
      selectedQuizType = type;
      showMathQuizList();
    }, type === selectedQuizType)
  ));
  quizToolbarReserve.hidden = true;
  quizToolbarMiddle.style.display = "none";
  quizToolbarActions.style.display = "none";
  quizTypeActions.hidden = false;
  quizTypeActions.style.removeProperty("display");
  quizToolbar.hidden = false;

  const available = quizCatalog.filter(quiz =>
    quiz.level === quizLevel &&
    quiz.activity === quizMode &&
    quiz.subject === quizSubject &&
    quiz.type === selectedQuizType
  );
  quizContent.classList.add("menu-buttons");
  quizContent.setAttribute("role", "navigation");
  quizContent.setAttribute("aria-label", "Quizzes");
  quizContent.style.overflow = "visible";
  quizContent.style.alignItems = "flex-start";
  quizContent.style.alignContent = "flex-start";
  quizContent.style.flexWrap = "wrap";
  quizContent.replaceChildren(...available.map(quiz => quizOption(quiz.name, quiz.open)));
  quizContent.scrollTop = 0;
}

/* Reusable English word explanations; add Malay/Korean entries here later. */
const englishWordMeanings = new Map([["sen", "cent"]]);

function addEnglishWordHints(element, text) {
  const phrase = String(text);
  const words = [...englishWordMeanings.keys()]
    .sort((a, b) => b.length - a.length);
  const pattern = new RegExp(
    "(?<![\\p{L}\\p{N}])(" + words.join("|") + ")(?![\\p{L}\\p{N}])", "giu"
  );
  element.replaceChildren(...phrase.split(pattern).map(part => {
    const meaning = englishWordMeanings.get(part.toLowerCase());
    if (!meaning) return document.createTextNode(part);
    const word = document.createElement("span");
    word.className = "foreign-word";
    word.textContent = part;
    word.dataset.englishMeaning = meaning;
    word.tabIndex = 0;
    return word;
  }));
}

let englishTooltip = null;
function hideEnglishTooltip() {
  if (englishTooltip) englishTooltip.style.display = "none";
}
function canShowEnglishTooltip() {
  if (!activeQuiz || !activeQuiz.answers.length) return false;
  const index = activeQuiz.currentIndex;
  return Number.isInteger(index)
    ? activeQuiz.answers[index]?.dataset.checked === "true"
    : activeQuiz.answers.every(answer => answer.dataset.checked === "true");
}
function showEnglishTooltip(word, x, y) {
  if (!word || !canShowEnglishTooltip()) {
    hideEnglishTooltip();
    return;
  }
  if (!englishTooltip) {
    englishTooltip = document.createElement("span");
    englishTooltip.className = "math-quiz-title foreign-translation";
    englishTooltip.setAttribute("role", "tooltip");
    englishTooltip.style.setProperty("--pill-background", "#d8f3e7");
    document.body.append(englishTooltip);
  }
  englishTooltip.textContent = word.dataset.englishMeaning;
  englishTooltip.style.display = "inline-flex";
  englishTooltip.style.left = Math.max(8, Math.min(x + 18,
    window.innerWidth - englishTooltip.offsetWidth - 8)) + "px";
  englishTooltip.style.top = Math.max(8, Math.min(y - 10,
    window.innerHeight - englishTooltip.offsetHeight - 8)) + "px";
}
quizContent.addEventListener("pointermove", event => {
  const word = event.target.closest?.(".foreign-word");
  showEnglishTooltip(word && quizContent.contains(word) ? word : null,
    event.clientX, event.clientY);
});
quizContent.addEventListener("pointerleave", hideEnglishTooltip);
quizContent.addEventListener("scroll", hideEnglishTooltip);
quizContent.addEventListener("focusin", event => {
  const word = event.target.closest?.(".foreign-word");
  if (!word) return;
  const rect = word.getBoundingClientRect();
  showEnglishTooltip(word, rect.right, rect.top);
});
quizContent.addEventListener("focusout", hideEnglishTooltip);

function createAnswerExplanation(text = "") {
  const pill = document.createElement("div");
  pill.className = "math-quiz-title";
  pill.style.setProperty("--pill-background", "#d8f3e7");
  pill.style.color = "#145740";
  pill.style.maxWidth = "100%";
  pill.setAttribute("role", "status");
  addEnglishWordHints(pill, text);
  return pill;
}

function textPart(value) {
  const item = document.createElement("span");
  item.textContent = String(value);
  return item;
}

function makeMathQuiz(questions) {
  quizToolbarName.textContent = "Times Tables";
  const quiz = document.createElement("div");
  quiz.className = "math-quiz";

  const grid = document.createElement("div");
  grid.className = "math-quiz-grid";
  const answers = [];
  questions.forEach(question => {
    const card = document.createElement("div");
    card.className = "math-quiz-card";
    card.dataset.questionId = question.id;

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
    card.append(equation, mark);
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

  const instruction = document.createElement("div");
  instruction.className = "math-basics-question-text";
  instruction.textContent = "Fill in the missing number. Press Enter to check.";
  quiz.append(instruction, grid);
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

homeMenuButton.addEventListener("click", openHomePage);
quizMenuButton.addEventListener("click", openQuizMenu);

window.addEventListener("resize", scaleFrame);
scaleFrame();
restoreLogin();


/* PM3 Math Basics: independent questions and answer styles; no stage resizing. */
function shufflePM3(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index--) {
    const pick = Math.floor(Math.random() * (index + 1));
    [result[index], result[pick]] = [result[pick], result[index]];
  }
  return result;
}

function planPM3Rounds(bank) {
  const groups = new Map();
  for (const question of bank) {
    if (!groups.has(question.topic)) groups.set(question.topic, []);
    groups.get(question.topic).push(question);
  }
  if (groups.size !== 9 || [...groups.values()].some(group => group.length !== 10)) {
    throw new Error("PM3 question bank needs nine groups of ten.");
  }
  const topics = shufflePM3([...groups.keys()]);
  for (let attempt = 0; attempt < 1000; attempt++) {
    const rounds = Array.from({ length: 9 }, () => []);
    topics.forEach((topic, topicIndex) => {
      const items = shufflePM3(groups.get(topic));
      const positions = shufflePM3([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      positions.forEach((roundIndex, i) => rounds[roundIndex].push(items[i]));
      rounds[topicIndex].push(items[9]);
    });
    if (rounds.every(round =>
      round.length === 10 &&
      round.some(question => question.type === "typing") &&
      round.some(question => question.type === "sort") &&
      round.some(question => ["choice", "image-question", "image-choice"]
        .includes(question.type)))) {
      return rounds.map(round => shufflePM3(round.map(question => question.id)));
    }
  }
  throw new Error("Could not arrange a balanced PM3 quiz set.");
}

function selectFreshPM3Questions(bank) {
  const byId = new Map(bank.map(question => [question.id, question]));
  return planPM3Rounds(bank)[0].map(id => byId.get(id));
}

function pm3Shape(shape) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 120 100");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Shape picture");
  let element;
  if (shape === "circle" || shape === "oval") {
    element = document.createElementNS(ns, "ellipse");
    element.setAttribute("cx", "60");
    element.setAttribute("cy", "50");
    element.setAttribute("rx", shape === "circle" ? "40" : "50");
    element.setAttribute("ry", shape === "circle" ? "40" : "28");
  } else if (shape === "square" || shape === "rectangle") {
    element = document.createElementNS(ns, "rect");
    element.setAttribute("x", shape === "square" ? "20" : "8");
    element.setAttribute("y", shape === "square" ? "10" : "22");
    element.setAttribute("width", shape === "square" ? "80" : "104");
    element.setAttribute("height", shape === "square" ? "80" : "56");
  } else {
    const points = {
      triangle: "60,7 114,93 6,93",
      pentagon: "60,5 113,43 93,95 27,95 7,43",
      hexagon: "35,6 85,6 115,50 85,94 35,94 5,50"
    };
    if (!points[shape]) throw new Error("Unknown shape.");
    element = document.createElementNS(ns, "polygon");
    element.setAttribute("points", points[shape]);
  }
  element.setAttribute("fill", "#171717");
  svg.append(element);
  return svg;
}

function pm3AnswerMark() {
  const mark = document.createElement("span");
  mark.className = "math-quiz-mark math-basics-mark";
  mark.setAttribute("role", "status");
  return mark;
}

function pm3SetMark(mark, correct) {
  mark.textContent = correct ? "✓" : "✕";
  mark.classList.add(correct ? "is-right" : "is-wrong");
  mark.setAttribute("aria-label", correct ? "Correct" : "Incorrect");
}

function pm3CanAnswer() {
  const session = activeQuiz;
  return !!session && session.kind === "pm3-basics" &&
    !session.completed && !session.expired && !quizSaving &&
    session.answers[session.currentIndex].dataset.checked !== "true";
}

function pm3CommitAnswer(correct) {
  if (!pm3CanAnswer()) return;
  const session = activeQuiz;
  const answer = session.answers[session.currentIndex];
  answer.dataset.checked = "true";
  answer.dataset.correct = String(correct);
  const explanation = createAnswerExplanation(
    session.questions[session.currentIndex].explanation
  );
  quizContent.append(explanation);
  quizContent.querySelectorAll("button, input").forEach(control => {
    control.disabled = true;
  });
  updateQuizProgress();
}

function pm3ChoiceOptions(question, imageOptions) {
  const choices = document.createElement("div");
  choices.className = imageOptions ? "math-basics-image-options menu-buttons" :
    "math-basics-answer-row menu-buttons";
  for (const value of shufflePM3(question.options)) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.value = value;
    const mark = pm3AnswerMark();
    if (imageOptions) {
      button.append(pm3Shape(value), mark);
      button.setAttribute("aria-label", "Picture option");
    } else {
      const unit = question.type === "image-question"
        ? question.prompt.includes("sides") ? " sides" : " corners"
        : "";
      addEnglishWordHints(button, value + unit);
    }
    button.addEventListener("click", () => {
      if (!pm3CanAnswer()) return;
      const correct = value === question.answer;
      button.classList.add(correct ? "is-right" : "is-wrong");
      pm3SetMark(mark, correct);
      pm3CommitAnswer(correct);
    });
    if (imageOptions) {
      choices.append(button);
    } else {
      const line = document.createElement("div");
      line.className = "math-basics-option-line";
      line.append(button, mark);
      choices.append(line);
    }
  }
  return choices;
}

function pm3TypingAnswer(question) {
  const row = document.createElement("div");
  row.className = "math-basics-input-row";
  const input = document.createElement("input");
  input.className = "math-quiz-answer math-basics-input";
  input.type = "text";
  input.inputMode = "numeric";
  input.autocomplete = "off";
  input.maxLength = 8;
  input.setAttribute("aria-label", "Type your answer and press Enter");
  const mark = pm3AnswerMark();
  input.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    if (!pm3CanAnswer() || !/^\d+$/.test(input.value.trim())) return;
    const correct = Number(input.value.trim()) === Number(question.answer);
    input.classList.add(correct ? "is-right" : "is-wrong");
    pm3SetMark(mark, correct);
    pm3CommitAnswer(correct);
    input.blur();
  });
  row.append(input, mark);
  return row;
}

function pm3SortAnswer(question) {
  const region = document.createElement("div");
  region.className = "math-basics-sort";
  const source = document.createElement("div");
  source.className = "math-basics-source-row menu-buttons";
  const targetRow = document.createElement("div");
  targetRow.className = "math-basics-target-row";
  const targets = document.createElement("div");
  targets.className = "math-basics-source-row menu-buttons";
  const mark = pm3AnswerMark();
  targetRow.append(targets, mark);
  region.append(source, targetRow);
  const order = shufflePM3(question.values);
  if (order.every((value, index) => value === question.answer[index])) {
    order.push(order.shift()); // The starting pieces must not already be solved.
  }
  const placed = Array(question.answer.length).fill(null);

  function place(value, index) {
    if (!pm3CanAnswer() || !question.values.includes(value)) return;
    if (index < 0 || index >= placed.length) return;
    const old = placed.indexOf(value);
    if (old === index) return;
    const replaced = placed[index];
    placed[index] = value;
    if (old >= 0) placed[old] = replaced;
    draw();
    if (placed.every(item => item !== null)) {
      const correct = placed.every((item, i) => item === question.answer[i]);
      targets.querySelectorAll("button").forEach((button, i) => {
        button.classList.add(placed[i] === question.answer[i] ? "is-right" : "is-wrong");
      });
      pm3SetMark(mark, correct);
      pm3CommitAnswer(correct);
    }
  }

  function remove(index) {
    if (!pm3CanAnswer()) return;
    placed[index] = null;
    draw();
  }

  function enableDrag(button, value) {
    button.draggable = true;
    button.addEventListener("dragstart", event => {
      if (!pm3CanAnswer()) { event.preventDefault(); return; }
      event.dataTransfer.setData("text/plain", value);
      event.dataTransfer.effectAllowed = "move";
      // Draw only the pill, without the browser's white drag rectangle.
      if (event.dataTransfer.setDragImage) {
        const width = button.offsetWidth;
        const height = button.offsetHeight;
        const canvas = document.createElement("canvas");
        canvas.width = width * 2;
        canvas.height = height * 2;
        const context = canvas.getContext("2d");
        if (context) {
          context.scale(2, 2);
          context.fillStyle = "#f1f1f1";
          context.beginPath();
          context.roundRect(0, 0, width, height, height / 2);
          context.fill();
          context.fillStyle = "#171717";
          context.font = '14px "Google Sans", sans-serif';
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText(value, width / 2, height / 2);
          event.dataTransfer.setDragImage(canvas, width / 2, height / 2);
        }
      }
    });
  }

  function draw() {
    source.replaceChildren();
    targets.replaceChildren();
    for (const value of order) {
      const button = document.createElement("button");
      button.type = "button";
      addEnglishWordHints(button, value);
      const used = placed.includes(value);
      button.className = used ? "math-basics-used" : "";
      button.disabled = used;
      if (!used) {
        enableDrag(button, value);
        button.addEventListener("click", () => {
          const empty = placed.indexOf(null);
          if (empty !== -1) place(value, empty);
        });
      }
      source.append(button);
    }
    placed.forEach((value, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "math-basics-slot" + (value === null ? "" : " is-filled");
      addEnglishWordHints(button, value === null ? "" : value);
      button.setAttribute("aria-label",
        value === null ? "Empty answer place " + (index + 1) :
          "Number " + value + " in place " + (index + 1) + ". Click to remove.");
      if (value !== null) {
        enableDrag(button, value);
        button.addEventListener("click", () => remove(index));
      }
      button.addEventListener("dragover", event => {
        if (!pm3CanAnswer()) return;
        event.preventDefault();
        button.classList.add("math-basics-drag-over");
      });
      button.addEventListener("dragleave", () => {
        button.classList.remove("math-basics-drag-over");
      });
      button.addEventListener("drop", event => {
        event.preventDefault();
        const dropped = event.dataTransfer.getData("text/plain");
        place(dropped, index);
      });
      targets.append(button);
    });
  }
  source.addEventListener("dragover", event => event.preventDefault());
  source.addEventListener("drop", event => {
    event.preventDefault();
    const value = event.dataTransfer.getData("text/plain");
    const index = placed.indexOf(value);
    if (index !== -1) remove(index);
  });
  draw();
  return region;
}

function renderPM3Question() {
  const session = activeQuiz;
  if (!session || session.kind !== "pm3-basics") return;
  hideEnglishTooltip();
  const question = session.questions[session.currentIndex];
  const card = quizContent;
  card.classList.add("math-basics-card");
  card.dataset.questionId = question.id;
  card.replaceChildren();
  const prompt = document.createElement("div");
  prompt.className = "math-basics-question-text";
  addEnglishWordHints(prompt, question.prompt);
  card.append(prompt);

  if (question.type === "image-question") {
    const row = document.createElement("div");
    row.className = "math-basics-visual-row";
    const picture = document.createElement("div");
    picture.className = "math-basics-picture";
    picture.append(pm3Shape(question.image));
    const options = pm3ChoiceOptions(question, false);
    options.className = "math-basics-answer-column menu-buttons";
    row.append(picture, options);
    card.append(row);
  } else if (question.type === "image-choice") {
    card.append(pm3ChoiceOptions(question, true));
  } else if (question.type === "choice") {
    card.append(pm3ChoiceOptions(question, false));
  } else if (question.type === "typing") {
    card.append(pm3TypingAnswer(question));
  } else if (question.type === "sort") {
    card.append(pm3SortAnswer(question));
  } else {
    throw new Error("Unknown question style.");
  }
  quizContent.scrollTop = 0;
  updateQuizProgress();
}

async function loadPM3MathBasics() {
  resetQuizContent();
  const run = quizRenderRun;
  try {
    const response = await fetch("./id/math-pm3-basics.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Questions could not load.");
    const bank = await response.json();
    if (!Array.isArray(bank) || bank.length < 10 ||
        bank.some(question => !question.explanation)) {
      throw new Error("Questions or explanations are missing.");
    }
    if (run !== quizRenderRun) return;
    const questions = selectFreshPM3Questions(bank);
    if (!questions) {
      quizContent.textContent = "You have finished all Basic Knowledge questions.";
      return;
    }
    quizToolbarName.textContent = "Basic Knowledge";
    const answers = questions.map(() => {
      const state = document.createElement("input");
      state.dataset.checked = "false";
      state.dataset.correct = "false";
      return state;
    });
    startQuiz(questions, answers);
    activeQuiz.kind = "pm3-basics";
    activeQuiz.quizName = "Basic Knowledge";
    activeQuiz.currentIndex = 0;
    renderPM3Question();
  } catch (error) {
    if (run !== quizRenderRun) return;
    quizContent.textContent = "Basic Knowledge could not load. Please try again.";
  }
}

quizNextButton.addEventListener("click", () => {
  const session = activeQuiz;
  if (!session || session.kind !== "pm3-basics" ||
      session.completed || session.expired ||
      session.answers[session.currentIndex].dataset.checked !== "true" ||
      session.currentIndex >= session.questions.length - 1) return;
  session.currentIndex += 1;
  renderPM3Question();
});
