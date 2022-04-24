function clear(title,description,dueDate,priority,notes){
    title.value='';
    description.value='';
    dueDate.value='';
    priority.value='';
    notes.value='';
    const activeTask = document.querySelector(".activeTask");
    if(activeTask!=undefined){
        activeTask.classList.remove("activeTask");
    }
}
export default clear