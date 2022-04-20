let taskArr= [];
function appendTask(area,title){
    const task = document.createElement("div");
    task.classList.add("task");
    const taskTitle =document.createElement("h1");
    taskTitle.textContent=title;
    task.appendChild(taskTitle);
    area.appendChild(task);
    labelProjects();
}
function labelProjects(){
    const projects = document.querySelectorAll(".task");
    for(let i=0;i<projects.length;i++){
        projects[i].setAttribute("id",i)
    }
}
function taskPush(arr){
    taskArr.push(arr);
}
export default appendTask
