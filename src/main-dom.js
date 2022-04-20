const content = document.querySelector(".content");
function createHeader(){
    const header = document.createElement('div');
    header.classList.add("header");
    content.appendChild(header);
    headerContent(header);
}
function headerContent(header){
    const heading = document.createElement("h1");
    heading.textContent="Todo List";
    heading.classList.add("heading");
    header.appendChild(heading);
    const searchBar = document.createElement("input");
    searchBar.type="search";
    searchBar.placeholder="search";
    searchBar.classList.add("searchBar");
    header.appendChild(searchBar);
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
    createHeader();
    sidebar();
    contentSpace();
}

export default createMain