import axios from "axios";


export const makeRequest = axios.create({
    baseURL:'https://codpet-front-production.up.railway.app',
    withCredentials: true
})