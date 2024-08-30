const main = document.getElementById('main');

blogPosts = JSON.parse(localStorage.getItem("blogPosts"));

blogPosts.array.forEach(post => {
    const div = document.createElement('div');
});