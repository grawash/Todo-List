import { todo, remover } from "./add-todo"
function deleteTask(){
const activeTask = document.querySelector(".activeClass")
let id = parseInt(activeTask.id);
remover(id);
// console.log("wha");
activeTask.remove();
const projects = document.querySelectorAll(".task");
for(let i=0;i<projects.length;i++){
    projects[i].setAttribute("id",i)
}
}

export default deleteTask