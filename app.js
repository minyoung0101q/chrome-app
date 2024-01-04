const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
console.log(loginForm);
console.log(loginInput);

const link = document.querySelector("a");

//click이 아니라 submit event로!
function handleLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  // alert("clicked");
  /* 이 alert가 -> 이 page가 다른 동작을 하지 못하도록 막고 있다.
  그래서 alert창이 뜨고 아무일도 일어나지 않는 것이지만, 획인 버튼을 눌러서 alert가 없어지면 이 브라우저의 기본 동작이 실행되는 걸 보게 된다.
  브라우저의 기본 동작이 실행된다. 즉 링크로 이동하는 것이다.
  지금은 alert가 흐름을 중단시키기 때문에 잘 사용하지 않는다.
  모든 것들이 막혀있다가 OK를 누르면 다시 기본 동작이 실행된다.

  이전 영상에서 말했듯이, 우리가 EventListener를 만들고 거기에 함수를 줬다는 걸 JS가 보게 되면, 
  */
}

loginForm.addEventListener("submit", handleLoginSubmit);
//브라우저에서 submit event가 실행되면 해당 이벤트 리스너의 함수를 호출한다.
//브라우저에서 즉, JS에서 함수를 호출할 때 event 매개변수에 담을 값을 넘긴다.
link.addEventListener("click", handleLinkClick);
