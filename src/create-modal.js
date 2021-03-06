import {todo,remover} from "./add-todo";
import clear from "./clear-modal";
//creates hidden modal on page
function createModal(body){
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalContent = document.createElement("form");
    modalContent.classList.add("modalContent");
    ceateModalContent(modalContent,modal);
    modal.appendChild(modalContent);
    body.appendChild(modal);
}
//creates modal content
function ceateModalContent(modalContent,modal){
    var array = ["High","Medium","Low"];
    const title = document.createElement("input");
    title.type="text";
    title.placeholder="Enter Title";
    title.classList.add("title");
    title.setAttribute("required", "");
    const description = document.createElement("input");
    description.type="text";
    description.placeholder="Description";
    description.required=true;
    description.classList.add("description");
    const dueDate = document.createElement("input");
    dueDate.type="date";
    dueDate.setAttribute("required", "");
    dueDate.classList.add("dueDate");
    const priority = document.createElement("select");
    priority.id = "priority";
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        priority.appendChild(option);
    }
    priority.required="true";
    priority.classList.add("priority");
    const notes = document.createElement("textarea");
    notes.placeholder="Take Notes..";
    notes.classList.add("notes");
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer")
    const submit = document.createElement("button");
    submit.textContent="submit";
    submit.classList.add("modalSubmit");
    const cancel = document.createElement("button");
    cancel.textContent="cancel";
    cancel.classList.add("modalCancel");
    cancel.classList.add("closeModal");
    buttonContainer.appendChild(submit);
    buttonContainer.appendChild(cancel);
    modalContent.appendChild(title);
    modalContent.appendChild(description);
    modalContent.appendChild(dueDate);
    modalContent.appendChild(priority);
    modalContent.appendChild(notes);
    modalContent.appendChild(buttonContainer);
    cancel.addEventListener('click', () => {
        modal.style.display='none';
        clear(title,description,dueDate,priority,notes);
    })
    submit.addEventListener('click', () => {
        if(title.value!="" && description.value!="" && dueDate.value!="" && priority.value!=""){
        todo(title.value,description.value,dueDate.value,priority.value,notes.value);
        modal.style.display='none';
        clear(title,description,dueDate,priority,notes);
        }
    })
}

export default createModal