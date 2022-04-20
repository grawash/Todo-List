import createMain from "./main-dom"
import appendTask from "./create-task"
import createModal from "./create-modal";
import "./styles/styles.css"
createMain();
const body = document.querySelector("body");
const title= document.querySelector(".createText");
const submit= document.querySelector(".createButton");
const area = document.querySelector(".taskArea");
const add = document.querySelector(".addBtn");
createModal(body);
const modal = document.querySelector(".modal");
submit.addEventListener("click", () =>{ appendTask(area,title.value);});
add.addEventListener("click", () =>{ modal.style.display='block';});
console.log("Hello World!")