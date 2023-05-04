import axios from 'axios'
import { ReactNode } from 'react';
axios.defaults.baseURL = 'https://easy-food-test.onrender.com/'



export function setToken(token: string | null): void {
    axios.defaults.headers.common.Authorization = token?`Bearer ${token}` : "";
}