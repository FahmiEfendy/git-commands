const password = document.getElementById("password");
const remindMeIcon = document.getElementById("remindMeIcon");
const passwordIcon = document.getElementById("passwordIcon");

function togglePassword() {
  password.type === "password"
    ? (password.type = "text")
    : (password.type = "password");

  if (passwordIcon.classList.contains("fa-eye-slash")) {
    passwordIcon.classList.remove("fa-eye-slash");
    passwordIcon.classList.add("fa-eye");
  } else if (passwordIcon.classList.contains("fa-eye")) {
    passwordIcon.classList.remove("fa-eye");
    passwordIcon.classList.add("fa-eye-slash");
  }
}

function toggleRemindMe() {
  if (remindMeIcon.classList.contains("fa-square")) {
    remindMeIcon.classList.remove("fa-square");
    remindMeIcon.classList.add("fa-square-check");
    remindMeIcon.classList.add("fa-solid");
  } else if (remindMeIcon.classList.contains("fa-square-check")) {
    remindMeIcon.classList.remove("fa-square-check");
    remindMeIcon.classList.remove("fa-solid");
    remindMeIcon.classList.add("fa-square");
  }
}
