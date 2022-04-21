import createMain from "./main-dom"
import appendTask from "./create-task"
import deleteTask from "./delete-project";
import "./styles/styles.css"
createMain();
const body = document.querySelector("body");
const title= document.querySelector(".createText");
const submit= document.querySelector(".createButton");
const area = document.querySelector(".taskArea");
const add = document.querySelector(".addBtn");
const modal = document.querySelector(".modal");
const deleteButton = document.querySelector(".deleteButton");
submit.addEventListener("click", () =>{ appendTask(area,title.value);});
deleteButton.addEventListener('click', () =>{ deleteTask()});
add.addEventListener("click", () =>{ modal.style.display='block';});
console.log("Hello World!")