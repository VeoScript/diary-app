import axios from 'axios'

const api = axios.create({
  baseURL: process.env.DEV_API_URL,
  withCredentials: true,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
  },
})

export default api
