import "./styles.css";
//InputList
var nameInput = document.querySelector("#nameInput");
var emailInput = document.querySelector("#emailInput");
var passwordInput = document.querySelector("#passwordInput");
var passwordCheckInput = document.querySelector("#passwordCheckInput");

//Labels
var nameLabel = document.querySelector("#name");
var emailLabel = document.querySelector("#email");
var passwordLabel = document.querySelector("#password");
var passwordCheckLabel = document.querySelector("#passwordCheck");
var warn = document.querySelector("#warn");
var success = document.querySelector("#success");

//Button
var buttonSubmit = document.querySelector("#buttonSubmit");

//Valid
let name = false;
let email = false;
let password = false;
let passwordCheck = false;

const validation = () => {
  if (name == false) {
    warn.textContent = "İsim 2 harften uzun olmalıdır!";
    buttonSubmit.disabled = true;
  } else if (email == false) {
    warn.textContent = "Lütfen Geçerli Bir E-posta Giriniz";
    buttonSubmit.disabled = true;
  } else if (password == false) {
    warn.textContent = "Şifre 6 haneden uzun olmalıdır!";
    buttonSubmit.disabled = true;
  } else if (passwordCheck == false) {
    warn.textContent = "Şifreler Uyuşmuyor!";
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.disabled = true;
  }

  if (
    name === true &&
    email === true &&
    password === true &&
    passwordCheck === true
  ) {
    warn.textContent = "";
    success.textContent = "Geçerli!";
    buttonSubmit.disabled = false;
  } else {
    success.textContent = "";
  }
};

buttonSubmit.disabled = true;
const control = () => {
  if (nameInput.value.length <= 2 && nameInput.value.length > 0) {
    nameLabel.style = "color:red";
    name = false;
  } else if (nameInput.value.length > 2) {
    name = true;
    nameLabel.style = "color:black";
  } else {
    nameLabel.style = "color:black";
  }

  if (emailInput.value.length <= 5 && emailInput.value.length > 0) {
    emailLabel.style = "color:red";
    email = false;
  } else if (emailInput.value.length > 5) {
    email = true;
    emailLabel.style = "color:black";
  } else {
    emailLabel.style = "color:black";
  }

  if (passwordInput.value.length < 6 && passwordInput.value.length > 0) {
    passwordLabel.style = "color:red";

    password = false;
  } else if (passwordInput.value.length >= 6) {
    password = true;
    passwordLabel.style = "color:black";
  } else {
    passwordLabel.style = "color:black";
  }

  if (
    passwordInput.value !== passwordCheckInput.value &&
    passwordCheckInput.value.length > 0
  ) {
    passwordCheck = false;
    passwordCheckLabel.style = "color:red";
  } else if (passwordInput.value === passwordCheckInput.value) {
    passwordCheck = true;
    passwordCheckLabel.style = "color:black";
  } else {
    passwordCheck = false;
    passwordCheckLabel.style = "color:black";
  }

  validation();
};

nameInput.addEventListener("change", () => {
  control();
});

emailInput.addEventListener("change", () => {
  control();
});

passwordInput.addEventListener("change", () => {
  control();
});

passwordCheckInput.addEventListener("change", () => {
  control();
});
