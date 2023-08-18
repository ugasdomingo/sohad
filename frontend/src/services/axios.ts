import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://sohad.vercel.app/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const apiFile = axios.create({
    baseURL: 'https://sohad.vercel.app/api/v1',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

// 'Authorization': `Bearer ${localStorage.getItem('user')}`
