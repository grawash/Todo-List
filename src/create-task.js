function appendTask(area,title){
    const task = document.createElement("div");
    task.classList.add("task");
    const taskTitle =document.createElement("h1");
    taskTitle.textContent=title;
    task.appendChild(taskTitle);
    area.appendChild(task);
}

export default appendTask