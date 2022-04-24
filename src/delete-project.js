import { todo, remover } from "./add-todo"
import { reloadRemover } from "./create-task";
function deleteTask(){
const activeTask = document.querySelector(".activeClass")
let id = parseInt(activeTask.id);
remover(id);
reloadRemover(id);
// console.log("wha");
activeTask.remove();
const projects = document.querySelectorAll(".task");
for(let i=0;i<projects.length;i++){
    projects[i].setAttribute("id",i)
}
}

export default deleteTask