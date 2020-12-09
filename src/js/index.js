const axios = require("axios")
axios.get('http://alemarc.dev/blog').then((response) => {
    console.log(response.data);
})