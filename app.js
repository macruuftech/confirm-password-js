let pass = document.querySelector("#pass");
let pass2 = document.querySelector("#pass2");
let form = document.querySelector("#form");
let error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorMessage();
  if (pass.value.length <= 5) {
    errorMessage("Password must be at least 6 characters");
  } else if (pass.value !== pass2.value) {
    errorMessage("Passwords do not match");
  } else {
    alert("password is ok");
  }
});

const errorMessage = (text) => {
  if (text == null) {
    error.classList.remove("active");
  } else {
    error.classList.add("active");
    error.innerHTML = text;
  }
};
