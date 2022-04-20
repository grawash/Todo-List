//creates hidden modal on page
function createModal(body){
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modalContent");
    ceateModalContent(modalContent);
    modal.appendChild(modalContent);
    body.appendChild(modal);
}
//creates modal content
function ceateModalContent(modalContent){
    const title = document.createElement("input");
    title.type="text";
    const description = document.createElement("input");
    description.type="text";
    const dueDate = document.createElement("input");
    description.type="date";
    const priority = document.createElement("input");
    description.type="select";
    const notes = document.createElement("input");
    description.type="text";
    modalContent.appendChild(title);
    modalContent.appendChild(description);
    modalContent.appendChild(dueDate);
    modalContent.appendChild(priority);
    modalContent.appendChild(notes);
}

export default createModal