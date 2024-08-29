const modeButton = document.getElementById("mode");
const currentMode = document.getElementById("currentmode");
const container = document.querySelector("#container");

let mode = "light";

modeButton.addEventListener("click", function () {
  if (mode == "light") {
    container.setAttribute("class", "dark");
    currentMode.innerHTML = "Light Mode";
    mode = "dark";
  } else {
    container.setAttribute("class", "light");
    currentMode.innerHTML = "Dark Mode";
    mode = "light";
  }
});
