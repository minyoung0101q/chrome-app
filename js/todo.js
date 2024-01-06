//form과 ul을 HTML에서 JavaScript로 가져오기
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //document 대신에 toDoForm 활용
const toDoList = document.getElementById("todo-list");
console.log(greetings); //greeting.js 파일에서 정의한 greetings를 쓸 수 있음

function deleteToDo() {
  console.log("kakakak"); //button이 클릭되었다는 것은 알지만, 어떤 li를 제거해야하는지 알지 못한다. 처음 것일까 마지막 것일까?
  //같은 event를 기다리고 있고, 그들 모두 같은 function을 실행시키고 있다.
  //5개의 button이 있는데! 모든 button이 같은 event를 기다리고 있고, 모두 같은 function을 실행하고 있다.
  //어떤 button이 클릭되었는지를 모른다.
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
  paintToDo(newTodo);
}
//submit eventListener
toDoForm.addEventListener("submit", handleToDoForm);
