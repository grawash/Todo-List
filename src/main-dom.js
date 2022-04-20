const content = document.querySelector(".content");
function header(){
    const header = document.createElement('div');
    header.classList.add("header");
    content.appendChild(header);
}
function sidebar(){
    const sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");
    content.appendChild(sidebar);
}
function contentSpace(){
    const mainContent = document.createElement('div');
    mainContent.classList.add("mainContent");
    content.appendChild(mainContent);
}

function createMain(){
    header();
    sidebar();
    contentSpace();
}

export default createMain