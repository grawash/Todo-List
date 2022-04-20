import taskPush from "./create-task"
let todoArr = []
//factory constructor
const newTodo = (title,description,dueDate,priority,notes) => {
    return{title,description,dueDate,priority,notes,addTodo};
}
//adds obj to array
function addTodo(obj){
    todoArr.push(obj);
}
//creates new todo
function todo(title,description,dueDate,priority,notes){
    let obj = newTodo(title,description,dueDate,priority,notes);
    addTodo(obj);
    console.log(todoArr);
    displayTodo();
}
function displayTodo(){
    const container = document.querySelector(".mainContent");
    empty(container);
    for(let i=0;i<todoArr.length;i++){
        createCard(i); 
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

export default todo