import axios from 'axios'

// {For simple request to backend server}
export default axios.create({
    baseURL:'http://192.168.0.121:8000',
    withCredentials:true,
    headers:
    {
        'Content-Type':'application/json'
    }
})



// {For admin request to backend server including Token }

export const axiosPrivate = axios.create({
    baseURL:'http://192.168.0.121:8000',
    withCredentials:true,
    headers:
    {
        'Content-Type':'application/json'
    }
})
