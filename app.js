const clientId = "574290651847-gr406870mug7sfhv4oamvjg4jtvdc8l3.apps.googleusercontent.com";
const scopes = "openid email profile https://www.googleapis.com/auth/drive.file";
const frame = document.getElementById("site-frame");
const loginButton = document.getElementById("google-login");
const statusMessage = document.getElementById("login-status");

let tokenClient;

function scaleFrame() {
  const width = parseFloat(getComputedStyle(frame).width);
  const height = parseFloat(getComputedStyle(frame).height);
  const scale = Math.min(1, window.innerWidth / width, window.innerHeight / height);
  frame.style.setProperty("--scale", String(scale));
}

function showError(message) {
  loginButton.disabled = false;
  statusMessage.textContent = message;
  statusMessage.hidden = false;
}

async function finishLogin(response) {
  if (response.error || !response.access_token) {
    showError("Google sign-in was not completed.");
    return;
  }

  const headers = { Authorization: `Bearer ${response.access_token}` };

  try {
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

    frame.replaceChildren();
  } catch (error) {
    showError("Could not connect to Google Drive. Please try again.");
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

window.addEventListener("resize", scaleFrame);
scaleFrame();
