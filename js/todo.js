//form과 ul을 HTML에서 JavaScript로 가져오기
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //document 대신에 toDoForm 활용
const toDoList = document.getElementById("todo-list");

//greetings의 form에서 했던 것과 비슷한 로직

function handleToDoForm(event) {
  event.preventDefault();
  //todolist의 첫번째 단계
  const newTodo = toDoInput.value;
  toDoInput.value = "";
}
//submit eventListener
toDoForm.addEventListener("submit", handleToDoForm);
