import {todo,remover} from "./add-todo";
import clear from "./clear-modal";
//creates hidden modal on page
function createModal(body){
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modalContent");
    ceateModalContent(modalContent,modal);
    modal.appendChild(modalContent);
    body.appendChild(modal);
}
//creates modal content
function ceateModalContent(modalContent,modal){
    const title = document.createElement("input");
    title.type="text";
    title.placeholder="Enter Title"
    const description = document.createElement("input");
    description.type="text";
    description.placeholder="Description"
    const dueDate = document.createElement("input");
    dueDate.type="date";
    const priority = document.createElement("input");
    priority.type="select";
    const notes = document.createElement("input");
    notes.type="text";
    const submit = document.createElement("button");
    submit.textContent="submit";
    const cancel = document.createElement("button");
    cancel.textContent="cancel";
    cancel.classList.add("closeModal");
    modalContent.appendChild(title);
    modalContent.appendChild(description);
    modalContent.appendChild(dueDate);
    modalContent.appendChild(priority);
    modalContent.appendChild(notes);
    modalContent.appendChild(submit);
    modalContent.appendChild(cancel);
    cancel.addEventListener('click', () => {
        modal.style.display='none';
        clear(title,description,dueDate,priority,notes);
    })
    submit.addEventListener('click', () => {
        todo(title.value,description.value,dueDate.value,priority.value,notes.value);
        modal.style.display='none';
        clear(title,description,dueDate,priority,notes);
    })
}

export default createModal