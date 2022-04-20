import createMain from "./main-dom"
import appendTask from "./create-task"
import "./styles/styles.css"

createMain();
const title= document.querySelector(".createText");
const submit= document.querySelector(".createButton");
const area = document.querySelector(".taskArea");
submit.addEventListener("click", () =>{ appendTask(area,title.value);});
console.log("Hello World!")