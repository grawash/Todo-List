import taskPush from "./create-task"
import { formatDistanceToNow } from 'date-fns'
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
    const activeCard = document.querySelector(".activeTask");
    let id =parseInt(activeTask.id);
    if (activeId!=activeTask.id){todoArr = []; activeId=activeTask.id};
    if (taskArr[id]!=undefined){todoArr=taskArr[id];}
    if(activeCard!=undefined){
        todoArr[parseInt(activeCard.id)]=obj;
    }
    else{
    todoArr.push(obj);
    }
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
//creates task cards
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
    let deleteCard = document.createElement("button")
    deleteCard.classList.add("deleteCard");
    deleteCard.textContent="Delete";
    deleteCard.addEventListener("click", ()=>{ cardRemove(card);})
    let date = document.createElement("p");
    date.textContent=`Due Date ${obj.dueDate}`;
    setPriority(card,priority);
    card.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        const tasks = document.querySelectorAll(".card");
        for(let i=0;i<tasks.length;i++){
            if (tasks[i].classList.contains('activeTask')){tasks[i].classList.remove("activeTask");}
        }
        card.classList.add("activeTask");
        populateModal(parseInt(card.id));
        modal.style.display="block";

    })
    appendChild(card,title,description,date,deleteCard);


}
function populateModal(id){
    const active = document.querySelector(".activeClass");
    const projId = parseInt(active.id);
    const title = document.querySelector(".title");
    title.value=taskArr[projId][id].title;
    const description = document.querySelector(".description");
    description.value = taskArr[projId][id].description;
    const Date = document.querySelector(".dueDate");
    Date.value = taskArr[projId][id].dueDate;
    const priority = document.querySelector(".priority");
    priority.value = taskArr[projId][id].priority;
    const notes = document.querySelector(".notes");
    notes.value = taskArr[projId][id].notes;
}
function cardRemove(card,e){
    if (!e) var e = window.event
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    const activeTask = document.querySelector(".activeClass");
    const cards = document.querySelectorAll(".card");
    for(let i=0;i<todoArr.length;i++){
        cards[i].setAttribute("id",i);
    }
    let i = parseInt(card.id);;
    let id = parseInt(activeTask.id);
    taskArr[id].splice(i,1);
    todoArr
    card.remove();
}
//sets priority color on cards
function setPriority(card, priority){
    if (priority=="High"){card.style.borderLeft="10px solid rgb(201, 9, 9)"}
    else if (priority=="Medium"){card.style.borderLeft="10px solid yellow"}
    else{card.style.borderLeft="10px solid rgb(8, 153, 8)"}
}
function appendChild(card,title,description,date,deleteCard){
    const container = document.querySelector(".mainContent");
    container.appendChild(card)
    card.appendChild(title)
    card.appendChild(description)
    card.appendChild(date)
    card.appendChild(deleteCard)
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