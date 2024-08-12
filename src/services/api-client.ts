import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '9c71f382790540bfbdd9b295cc99aba2'
    }
})