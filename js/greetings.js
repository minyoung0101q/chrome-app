const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function paintGreeting(username) {
    greeting.classList.remove("hidden");
    greeting.innerText = username; // 화면에 그리기
}

function handleFormSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden")
    const nickname = loginInput.value;
    localStorage.setItem("username", nickname); // localStorage에 저장
    paintGreeting(nickname);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", handleFormSubmit);
} else {
    paintGreeting(savedUsername);
}