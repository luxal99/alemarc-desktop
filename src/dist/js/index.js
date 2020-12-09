"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const axios = require("axios");
class App {
    constructor() {
        this.listOfBlogs = [];
    }
    async getBlogs() {
        const response = await axios.get('http://alemarc.dev/blog');
        console.log(response.data);
    }
}
exports.App = App;
//# sourceMappingURL=index.js.map