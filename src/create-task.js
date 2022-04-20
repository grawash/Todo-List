import { displayTodo } from "./add-todo";
function appendTask(area,title){
    const task = document.createElement("div");
    task.classList.add("task");
    const taskTitle =document.createElement("h1");
    taskTitle.textContent=title;
    task.appendChild(taskTitle);
    area.appendChild(task);
    labelProjects();
    task.addEventListener("click", ()=>{taskActive(task)})
}
function taskActive(task){
    const projects = document.querySelectorAll(".task");
    for(let i=0;i<projects.length;i++){
        if (projects[i].classList.contains('activeClass')){projects[i].classList.remove("activeClass");}
    }
    task.classList.add("activeClass");
    displayTodo();
}
function labelProjects(){
    const projects = document.querySelectorAll(".task");
    for(let i=0;i<projects.length;i++){
        projects[i].setAttribute("id",i)
    }
}
export default appendTask
