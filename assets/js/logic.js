const modeButton = document.getElementById("mode");
const currentMode = document.getElementById("currentmode");
const headerBox = document.getElementById("header");
const bodyBox = document.querySelectorAll(".bodyDiv");
// const bodyBox2 = document.querySelector(".bodyDiv2");
const container = document.getElementById("container");

let mode = "light";

modeButton.addEventListener("click", function () {
  if (mode == "light") {
    container.setAttribute("class", "dark");
    container.setAttribute("style", "color: white;");
    currentMode.innerHTML = "Light Mode";
    mode = "dark";
    headerBox.setAttribute(
      "style",
      "border-bottom: solid 2px white; color: white"
    );
    for (let i = 0; i < bodyBox.length; i++) {
        bodyBox[i].setAttribute("style", "border: solid 2px white;");
    }
  } else {
    container.setAttribute("class", "light");
    container.setAttribute("style", "color: black;");
    currentMode.innerHTML = "Dark Mode";
    mode = "light";
    headerBox.setAttribute("style", "border-bottom: solid 2px black;");
    for (let i = 0; i < bodyBox.length; i++) {
        bodyBox[i].setAttribute("style", "border: solid 2px black;");

    }
  }
});
