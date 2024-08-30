const fullName = document.getElementById("name");
const title = document.getElementById("title");
const content = document.getElementById("content");
const submitButton = document.getElementById("submit");

// retrieve and parse the JSON array containing the objects

let blogPosts = [];

if (JSON.parse(localStorage.getItem("blogPosts"))) {
  blogPosts = JSON.parse(localStorage.getItem("blogPosts"));
  console.log(blogPosts);
}

// create an event listener
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (fullName.value == "" || title.value == "" || content.value == "") {
    alert("Please fill out all of this form.");
  } else {
    let currentPost = {
      name: fullName.value,
      title: title.value,
      content: content.value.trim(),
    };
    blogPosts.push(currentPost);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    window.location.href = "./blog.html";
    // window.location.replace(); back button doesn't work
  }
});
