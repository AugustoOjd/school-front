import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://uculture.onrender.com/api',
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': 'https://uculture.onrender.com',
        'Content-Type': 'application/json',
    },
    
})