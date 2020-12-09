const axios = require("axios")

const blogDiv = document.getElementById("blog");
let items = []
axios.get('http://alemarc.dev/blog').then((response) => {

    items = response.data
}).then(() => {
    var list = document.getElementById('blog');

    for (const blog of items) {
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(blog.header));
        list.appendChild(entry);
    }
});