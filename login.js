// Floating label effect
document.querySelectorAll(".input-group input").forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      input.classList.add("filled");
    } else {
      input.classList.remove("filled");
    }
  });
});

// Toggle forms and buttons
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");
const loginButton2 = document.getElementById("login-button-2");
const registerButton2 = document.getElementById("register-button-2");

function animateFormHide(form) {
  return new Promise((resolve) => {
    form.style.animationName = "fadeOut";
    setTimeout(() => {
      form.style.display = "none";
      form.style.animationName = "";
      resolve();
    }, 400);
  });
}

function animateFormShow(form) {
  form.style.display = "flex";
  form.style.animationName = "fadeIn";
}

async function showLogin() {
  if (registerForm.style.display !== "none") {
    await animateFormHide(registerForm);
  }
  animateFormShow(loginForm);
  loginButton.classList.add("active");
  registerButton.classList.remove("active");
  loginButton2.classList.remove("active");
  registerButton2.classList.remove("active");
}

async function showRegister() {
  if (loginForm.style.display !== "none") {
    await animateFormHide(loginForm);
  }
  animateFormShow(registerForm);
  loginButton.classList.remove("active");
  registerButton.classList.add("active");
  loginButton2.classList.remove("active");
  registerButton2.classList.add("active");
}

loginButton.addEventListener("click", showLogin);
registerButton.addEventListener("click", showRegister);
loginButton2.addEventListener("click", showLogin);
registerButton2.addEventListener("click", showRegister);

// Add fade-in class on body on page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// Add login form submission handler
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (!username || !password) {
    alert("Nama pengguna dan kata sandi harus diisi.");
    return;
  }

  // Add fade-out animation before redirecting
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "achievements.html";
  }, 500);
});
