const todoForm = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-list input");
const todoList = document.querySelector("#todo-paint");

let toDos = []; // localStorage에 저장할 배열

// function ondeleteTodo(event) {
//     const li = event.target.parentElement; // 삭제하고자 하는 span의 부모 li
//     li.remove(); // 화면에서 삭제
//     toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // toDos 배열에서 삭제
//     saveTodos(); // localStorage에 저장
// }

function paintTodos(newTodoObj) { // ul>li>span
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

    li.id = newTodoObj.id; // 화면에 그리는 것에 li의 id를 줌
    button.innerText = "❌";
    span.innerText = newTodoObj.text;

    // 삭제
    button.addEventListener("click", (event) => {
        const li = event.target.parentElement; // 삭제하고자 하는 span의 부모 li
        li.remove(); // 화면에서 삭제
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // toDos 배열에서 삭제
        saveTodos(); // localStorage에 저장
    });
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(toDos)); // 새로운 todo 입력된 객체로 이루어진 toDos 배열을 저장
}

function todoFormSubmit(event) {
    event.preventDefault(); // 새로고침 방지
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    }
    toDos.push(newTodoObj); // newTodoObj 객체를 toDos 배열에 넣기
    saveTodos(); // 그것을 localStorage에 직렬화해서 저장
    paintTodos(newTodoObj); // 화면에 저장한 newTodoObj를 그리기
}

const savedTodos = localStorage.getItem("todos");

todoForm.addEventListener("submit", todoFormSubmit); // to do list 입력 과정 진행

if (savedTodos) { // null이 아니라면
    const parsedTodos = JSON.parse(savedTodos); // 파싱, 역직렬화
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodos); // 저장된 todo들을 화면에 그려주기
}