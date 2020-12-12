const axios = require("axios")

const blogDiv = document.getElementById("blog");
let items = []
axios.get('http://alemarc.dev/blog').then((response) => {
    items = response.data
}).then(() => {

    let data = document.getElementById('data');

    for (const blog of items) {

        const header = document.createElement('div');
        const image = document.createElement('img');
        const button = document.createElement('button')

        data.className = 'row'

        header.className = 'col-sm-4'
        header.innerHTML = blog.header;

        image.src = blog.listOfImages[0].url
        image.className = "img-fluid";

        button.className = 'orange-btn';
        button.textContent = "Preview"

        header.appendChild(image)
        header.appendChild(button)
        data.appendChild(header);
    }
});


function findItem(blog) {
    console.log('dasad');

}