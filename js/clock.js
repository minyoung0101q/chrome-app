const clock = document.querySelector("#clock");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greetings");

console.log(loginForm);
console.log(loginInput);
console.dir(loginInput);
console.log(greetings);
console.log(clock);

//form 기본 동작 막기
//localStorage에 사용자가 입력한 value 저장하기 키: "username" 값: username
//html 문서에 hidden class를 form과 input에 추가한 후 로그인 여부 확인 후 hidden class를 js로 remove

const b = "";
const a = "";
function greetingsRendering(username) {
  greetings.classList.remove("hidden");
  greetings.innerText = `Hello, ${username}`;
}

function handleFormSubmit(event) {
  loginForm.classList.add("hidden");
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greetingsRendering(username);
}

const savedUsername = localStorage.getItem("username");
console.log(savedUsername); //해당 키의 value 얻어옴
if (savedUsername === null) {
  //로그인하지 않은 사용자, form을 보여준다.
  loginForm.classList.remove("hidden");
  //form을 user에게 보여주고, 유저가 submit event를 발생시키기를 기다린다.
  loginForm.addEventListener("submit", handleFormSubmit);
} else {
  //로그인한 사용자, form을 가리고 h1을 보여준다.
  //form은 hidden 되어 있는 상태 html에서.
  greetingsRendering(savedUsername);
}

//시계, clock

function clockDigital() {
  //자바스크립트 내장 생성자 함수 Date 사용해서 새로운 Date 객체 반환값을 date에 저장
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  clock.innerText = time;
}

clockDigital(); //처음 한 번 실행
setInterval(clockDigital, 1000); //1초 마다 실행
