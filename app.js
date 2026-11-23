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

window.addEventListener("resize", scaleFrame);
scaleFrame();
restoreLogin();
