import axios from "axios";


export const makeRequest = axios.create({
    baseURL:'https://codpet-back-production.up.railway.app/api',
    withCredentials: true
})