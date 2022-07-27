import axios from "axios";

export const api = new axios.create({
    baseURL:"https://api.themoviedb.org/3"
})