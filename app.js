const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function handleFormSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}`;
}

loginForm.addEventListener("submit", handleFormSubmit);
