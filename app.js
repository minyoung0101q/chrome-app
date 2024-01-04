const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

/* 
관습 같은 것이다. -> 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다
그리고 이건 loginForm이나 loginInput 처럼 중요한 정보를 담은게 아니라서 대문자로 작성한다
*/

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
