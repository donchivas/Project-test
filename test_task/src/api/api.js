import Axios from "axios";

const URL = "https://webit-news-search.p.rapidapi.com";

const axios = Axios.create({
    baseURL: URL,
    headers: {
        "x-rapidapi-key": "ad083e94bfmsh28b00c2ca0bee1cp13c477jsn1acc099c6e85",
        "x-rapidapi-host": "webit-news-search.p.rapidapi.com",
        "useQueryString": true
    }
})

export class Api {

    static async fetchNews(selectedCategory = "all") {
        const data = await axios.get("/trending", {params: {category: selectedCategory}});
        return data.data;
    }

    static async search(q, selectedCategory = "all") {
        const data = await axios.get("/search", {params: {q, category: selectedCategory}});
        return data.data;
    }
}