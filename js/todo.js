const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoUl = document.querySelector("#todo-list");
console.log(toDoUl); // <ul></ul>

function handleDeleteToDo(event) {
  const li = event.target.parentElement; // button의 부모인 <li> <span>dd</span> <button>X</button> </li>
  li.remove();
}

function paintToDo(newToDo) {
  // li, span 생성
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  // button 생성
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", handleDeleteToDo);
  li.appendChild(span); // <span></span>
  console.log(li); // <li> <span></span> </li>
  li.appendChild(button); // appendChild() 순서 지키기
  console.log(li);
  toDoUl.appendChild(li);
  console.log(toDoUl); // <ul> <li> <span></span> </li> </ul>
}

function handleToDoForm(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoForm);
