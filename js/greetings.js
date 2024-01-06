/* login-form */
const loginForm = document.querySelector("#login-form"); //기본제출 동작 막기
const loginInput = document.querySelector("#login-form input"); //loginform의 input
const greetings = document.querySelector("#greetings"); //h1 가져오기
console.log(loginInput);
const USERNAME_KEY = "username";

function greetingsPaint(username) {
  greetings.classList.remove("hidden");
  greetings.innerText = username;
}

function handleLoginForm(event) {
  //로그인하지 않은 사용자가 로그인을 시도함
  event.preventDefault();
  const loginInputValue = loginInput.value; //사용자가 입력한 값이 들어있음
  console.log(loginInputValue);
  loginForm.classList.add("hidden");
  localStorage.setItem(USERNAME_KEY, loginInputValue);
  //getItem해서 저장하는 건 가능
  greetingsPaint(loginInputValue);
}

//이제 localStorage api에 저장했으니, 로그인 여부를 판별하면 됨
//localStorage.getItem이 비어있다면.
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  //로그인하지 않은 사용자라면 loginForm만 나타나야 함
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", handleLoginForm);
} else {
  //로그인한 사용자라면 해당 값을 가져와야 함
  greetingsPaint(savedUsername);
}
