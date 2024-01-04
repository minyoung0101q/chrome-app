//form과 h1을 숨겨뒀다가 localStorage에 존재한다면 h1을 보이게 하고
//localStorage에 없다면 form을 보이게 한다.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

// submit 되면 화면에 innerText 활용해 표시가 된다고 가정한다.
function handleSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); //코드 추가
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername); //해당 키의 value 출력
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); //Form이 나타남
  loginForm.addEventListener("submit", handleSubmit); //submit event를 기다림
} else {
  paintGreeting(savedUsername);
}
