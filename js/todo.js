//form과 ul을 HTML에서 JavaScript로 기져오기
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //document 대신에 toDoForm 활용
const toDoList = document.getElementById("todo-list");
console.log(greetings); //greeting.js 파일에서 정의한 greetings를 쓸 수 있음

const TODOS_KEY = "todos";

//todolist들을 저장할 배열
const toDos = [];

//toDos array의 내용을 localStorage에 넣어준다. 이게 다다.
function saveToDos() {
  //localStorage에 배열을 저장하려고 하면, 배열이 문자열로 변환되어 저장된다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  console.dir(event.target.parentElement.innerText); //innerText 정보를 얻을 수 있음
  const li = event.target.parentElement;
  li.remove(); //이게 다다, 이렇게하면 삭제 된다.
}

//toDo를 그리는 역할
//handleToDoForm function이 paintToDo를 사용하게 됨
function paintToDo(newTodo) {
  console.log("I will paint", newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  //두 element를 만들었다, 이제 span은 li 내부에 있어야 한다.
  li.appendChild(span); //이제 li는 span이라는 자식을 갖게 되었다.
  li.appendChild(button);

  console.log(li);
  //이제 이 새로운 li를 toDoList에 추가해야 한다. 4줄의 toDoList!!
  toDoList.appendChild(li);
}

//greetings의 form에서 했던 것과 비슷한 로직

function handleToDoForm(event) {
  event.preventDefault();
  //todolist의 첫번째 단계
  const newTodo = toDoInput.value; //input의 value를 비우기 전에 나타내는 string
  toDoInput.value = "";
  toDos.push(newTodo); //콘솔에 toDos를 찍어보면 내가 추가한 todolist들이 모두 찍힌다.
  //이제 이 toDos안의 item들을 localStorage에 넣으면 된다.
  //하지만, 문제는 localStorage에 array를 저장할 수가 없다는 것이다.
  //localStorage는 오로지 text만 저장할 수 있다.
  paintToDo(newTodo);
  saveToDos();
}
//submit eventListener
toDoForm.addEventListener("submit", handleToDoForm);

// localStorage에서 string을 array로 변환
// 먼저, savedToDos를 하는데 greetings.js에서 했던 것과 매우 비슷하다.
// "todos" -> 키가 반복되니까 변수를 만들자
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
/* 
만약 savedToDos가 localStorage에 존재한다면
if(savedToDos) 이렇게도 가능
*/
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos); //우리는 이것을 사용할 수 있다. => JavaScript에서 중요한 Data Structure이다.
  //대부분의 경우 array 각각의 item을 가지고 무언가를 하고 싶을 것이다.
  //즉, array 안에 있는 각각의 item에 대해 function을 실행시키고 싶은 것이다.
  parsedToDos.forEach((element) => console.log("this is the turn of", element));
}
