const main = document.getElementById("main");
const backArrow = document.getElementById("back");

backArrow.addEventListener("click", function () {
  window.location.href = "./index.html";
});

blogPosts = JSON.parse(localStorage.getItem("blogPosts"));

for (let i = 0; i < blogPosts.length; i++) {
  const div = document.createElement("div");
  const title = document.createElement("p");
  title.textContent = blogPosts[i].title;
  title.setAttribute(
    "style",
    "border-bottom: 1px dotted black; font-weight: bold"
  );
  const content = document.createElement("p");
  content.textContent = blogPosts[i].content;
  content.setAttribute(
    "style",
    "margin-left: 10px; padding-bottom: 35px; font-style: italic;"
  );
  const name = document.createElement("p");
  name.textContent = `Posted by: ${blogPosts[i].name}`;
  name.setAttribute("style", "font-weight: 100;");
  div.appendChild(title);
  div.appendChild(content);
  div.appendChild(name);
  document.getElementsByTagName("main")[0].appendChild(div);
  div.setAttribute(
    "style",
    "border: 2px solid black; margin: 6px 0px; padding-left: 8px;"
  );
  div.setAttribute("class", "bodyDiv");
}
