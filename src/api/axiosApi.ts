import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://uculture.onrender.com/api',
    withCredentials: true,
    headers:{
        origin: "https://uculture.onrender.com/",
        header: "https://uculture.onrender.com/"
    }
})