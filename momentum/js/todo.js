const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDolist = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = newToDo;
    li.appendChild(span);

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    
    toDolist.appendChild(li);
}


function handleToDoSumit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newToDo);
    saveToDos(newToDo);
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit",handleToDoSumit);