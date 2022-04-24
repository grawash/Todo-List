import { displayTodo } from "./add-todo";
let projectArr = []; 
if (JSON.parse(localStorage.getItem("projectDisplay"))!=null){
    projectArr=JSON.parse(localStorage.getItem("projectDisplay"));
}
function reloadProjects(){
    console.log(typeof(projectArr))
    const area = document.querySelector(".taskArea");
    for(let i=0;i<projectArr.length;i++){
        appendTask(area,projectArr[i]);
    }
}
export function reloadRemover(id){
    projectArr.splice(id,1);
    localStorage.setItem('projectDisplay', JSON.stringify(projectArr));
}
//appends projects to project area
function appendTask(area,title){
    if(checkTask(title)!=1){
        if(!projectArr.includes(title)){
            projectArr.push(title);
            localStorage.setItem('projectDisplay', JSON.stringify(projectArr));
        }
        const task = document.createElement("div");
        task.classList.add("task");
        const taskTitle =document.createElement("h1");
        taskTitle.textContent=title;
        task.appendChild(taskTitle);
        area.appendChild(task);
        labelProjects();
        task.addEventListener("click", ()=>{taskActive(task)})
        clearTaskText();
    }
}
//checks if such project already exists
function checkTask(title){
    let a=0;
    const projects = document.querySelectorAll(".task");
    for(let i=0;i<projects.length;i++){
        if (projects[i].firstChild.textContent==title || title==""){a=1}
    }
    if(a==1){console.log(a);return 1;}
}
//clears task text
function clearTaskText(){
    const taskText = document.querySelector(".createText")
    taskText.value="";
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

export {appendTask,reloadProjects}
