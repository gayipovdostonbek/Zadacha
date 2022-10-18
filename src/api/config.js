import axios from "axios";
import { BASE_URL } from './Urls'
const auth_key = window.localStorage.getItem('tooken');

export const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        "Authorization": 'Bearer ' + auth_key,
        'Content-Type': 'application/json'
    }
})