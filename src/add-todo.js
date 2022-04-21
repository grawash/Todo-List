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
    let title = document.createElement("p");
    title.textContent=obj.title;
    appendChild(card,title)

}
function appendChild(card,title){
    const container = document.querySelector(".mainContent");
    container.appendChild(card)
    card.appendChild(title)
}
//removes cards from dom
function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }

  function remover(id){
    taskArr.splice(id,1);
    activeId=undefined;
    console.log(taskArr)
    const projects = document.querySelectorAll(".task");
    for(let i=0;i<projects.length;i++){
        projects[i].setAttribute("id",i)
    }
}

export {todo,remover}