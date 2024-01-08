const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoUl = document.querySelector("#todo-list");

let toDos = [];

function saveToDos() {
  const jsonStringfyItem = JSON.stringify(toDos);
  localStorage.setItem("todos", jsonStringfyItem);
}

function handleDeleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObject) {
  const li = document.createElement("li");
  li.id = newToDoObject.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.addEventListener("click", handleDeleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoUl.appendChild(li);
  span.innerText = newToDoObject.text;
  button.innerText = "X";
}

function handleFormSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDoInput.value = "";
  toDos.push(newToDoObject);
  paintToDo(newToDoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handleFormSubmit);

const getItem = localStorage.getItem("todos");

//list 목록이 localStorage에 있다면
if (getItem !== null) {
  const parsedItem = JSON.parse(getItem);
  console.log(parsedItem);
  toDos = parsedItem; //localStorage에서 가져와서 toDos 배열에 저장
  toDos.forEach((element) => {
    paintToDo(element);
  });
}

/* 
1. todo add id와 text
2. todo delete
3. localStorage에 직렬화로 저장 setItem
4. localStorage에 파싱해서 가져오기 getItem -> 이전 것들을 toDos = parsedItem 하기
5. 삭제 버튼을 눌러서 localStorage에 적용
*/
