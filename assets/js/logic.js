const modeButton = document.getElementById("mode");
const currentMode = document.getElementById("currentmode");
const headerBox = document.getElementById("header");
const bodyBox = document.querySelector(".bodyDiv");
const bodyBox2 = document.querySelector(".bodyDiv2");
const container = document.querySelector("#container");

let mode = "light";

modeButton.addEventListener("click", function () {
  if (mode == "light") {
    container.setAttribute("class", "dark");
    currentMode.innerHTML = "Light Mode";
    mode = "dark";
    headerBox.setAttribute("style", "border-bottom: solid 2px white;");
    bodyBox.setAttribute("style", "border: solid 2px white; color: white;");
    bodyBox2.setAttribute("style", "border: solid 2px white; color: white;");
  } else {
    container.setAttribute("class", "light");
    currentMode.innerHTML = "Dark Mode";
    mode = "light";
    headerBox.setAttribute("style", "border-bottom: solid 2px black;");
    bodyBox.setAttribute("style", "border: solid 2px black;");
    bodyBox2.setAttribute("style", "border: solid 2px black;");
  }
});
