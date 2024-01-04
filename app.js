const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

console.log(loginForm);
console.log(loginInput);
console.log(greeting);

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}
// username을 인자로 받는 함수
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

/* localStorage에 유저정보가 없을 때
우리는 form의 submit을 기다린다.
form이 submit 되면 우리는 input으로부터 유저정보를 받고, 
 */
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
  // localStorage에 유저정보가 있을 때
} else {
  paintGreetings(savedUsername);
}
