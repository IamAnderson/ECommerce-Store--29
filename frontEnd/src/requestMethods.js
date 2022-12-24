import axios from "axios";

const baseUrl = "https://two9server.onrender.com/api/"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGQxYWRiZTgwNzJiMTljZGFmMmRlYSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NzE2NDk1NzksImV4cCI6MTY3MTkwODc3OX0.jCQ1Ppgab9BMNGsV9oI2mksdwyYX24RrL6tAJc1m9NQ"

export const publicRequest = axios.create({
    baseURL: baseUrl
});

export const userRequest = axios.create({
    baseURL: baseUrl,
    headers: {token: `Bearer ${TOKEN}`}
}) 

