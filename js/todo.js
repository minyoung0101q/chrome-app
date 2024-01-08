const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoUl = document.querySelector("#todo-list");

let toDos = [];

function saveToDos() {
  const savedToDos = JSON.stringify(toDos);
  localStorage.setItem("todos", savedToDos);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  console.log(li.id); //삭제하기 전에 li의 id를 얻는다.
  //toDo는 toDos DB에 있는 요소 중 하나이다.
  //그래서 이 함수는 DB에 있는 모든 것과 함께 실행된다.
  //이 문장의 의미 : 우리카 클릭한 li.id와 다른 toDo는 남겨두고 싶다.
  //li.id는 string 타입이고, toDo.id는 number 타입이다. => 그래서 이 둘이 다른 게 되니까 아무것도 지워지지 않는다.
  //parseInt는 문자열을 숫자로 바꾼다.
  //filter는 새로운 배열을 반환한다. 조건을 true하는 것들만 모아서
  //클릭한 li의 id와 db의 id가 같지 않은 것들을 모아 새로운 배열을 반환한다.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos(); //그리고 그것을 localStorage에 저장해서 반영한다.
}

function paintToDo(toDoInputValue) {
  const li = document.createElement("li");
  li.id = toDoInputValue.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.addEventListener("click", deleteToDo);
  span.innerText = toDoInputValue.text;
  button.innerText = "X";
  li.appendChild(span);
  li.appendChild(button);
  toDoUl.appendChild(li);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const toDoInputValue = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: toDoInputValue,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleFormSubmit);

const getItem = localStorage.getItem("todos");

if (getItem !== null) {
  const parsedItem = JSON.parse(getItem);
  toDos = parsedItem;
  parsedItem.forEach((element) => {
    paintToDo(element);
  });
}

/* todolist 추가 삭제 구현
1. add todo
2. delete todo
3. localStorage setItem 저장, 직렬화
4. loacalStorage getItem 파싱 -> 저장된 값을 화면에 그려주기
5. id를 추가해서 localStorage에 저장하고 그것을 화면에 뿌려준다 
6. 이제 id를 추가했으니 todo를 지울 때마다 localStorage에 업데이트 해야 한다.
*/
