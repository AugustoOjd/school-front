import axios from "axios"

export const instance = axios.create({
    baseURL: '/api',
    withCredentials: true,
    headers:{
        origin: "https://uculture.onrender.com/",
        header: "https://uculture.onrender.com/"
    }
})