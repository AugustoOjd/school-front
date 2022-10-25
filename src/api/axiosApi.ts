import axios from "axios"
import Cookies from "js-cookie"


export const instance = axios.create({
    baseURL: 'https://uculture.onrender.com/api',
    headers: {
        "Content-Type": "application/json",
        token: Cookies.get('token')!,
        user:  Cookies.get('user')!
    },
    // withCredentials: true,
    
})