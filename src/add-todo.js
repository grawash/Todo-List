import taskPush from "./create-task"
let todoArr = [];
let taskArr = [];
let activeId;

//factory constructor
const newTodo = (title,description,dueDate,priority,notes) => {
    return{title,description,dueDate,priority,notes,addTodo};
}
//adds obj to array
function addTodo(obj){
    const activeTask = document.querySelector(".activeClass");
    let id =parseInt(activeTask.id);
    if (activeId!=activeTask.id){todoArr = []; activeId=activeTask.id};
    if (taskArr[id]!=undefined){todoArr=taskArr[id];}
    todoArr.push(obj);
    taskArr[id]=todoArr;
    console.log(taskArr);
}
//creates new todo
function todo(title,description,dueDate,priority,notes){
    let obj = newTodo(title,description,dueDate,priority,notes);
    addTodo(obj);
    console.log(todoArr);
    displayTodo();
}
export function displayTodo(){
    const activeTask = document.querySelector(".activeClass");
    let id =parseInt(activeTask.id);
    todoArr=taskArr[id];
    const container = document.querySelector(".mainContent");
    empty(container);
    if(todoArr!=undefined){
    for(let i=0;i<todoArr.length;i++){
        createCard(i); 
    }
}
}
function createCard(i){
    let obj = todoArr[i];
    let card = document.createElement("div");
    card.classList.add("card")
    card.setAttribute('id',i);
    let title = document.createElement("h1");
    title.textContent=obj.title;
    let description = document.createElement("p");
    description.textContent=obj.description;
    let priority = obj.priority;
    setPriority(card,priority);
    appendChild(card,title,description)


}
function setPriority(card, priority){
    if (priority=="High"){card.style.borderLeft="10px solid rgb(201, 9, 9)"}
    else if (priority=="Medium"){card.style.borderLeft="10px solid yellow"}
    else{card.style.borderLeft="10px solid rgb(8, 153, 8)"}
}
function appendChild(card,title,description){
    const container = document.querySelector(".mainContent");
    container.appendChild(card)
    card.appendChild(title)
    card.appendChild(description)
}
//removes cards from dom
function empty(element) {
    while(element.childNodes.length>1) {
       element.removeChild(element.lastChild);
    }
  }

function remover(id){
    taskArr.splice(id,1);
    activeId=undefined;
    console.log(taskArr);
    const container = document.querySelector(".mainContent");
    empty(container);
}

export {todo,remover}