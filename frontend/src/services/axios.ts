import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://sohad-api.vercel.app/api/v1',
    withCredentials: true
});

// 'Authorization': `Bearer ${localStorage.getItem('user')}`
