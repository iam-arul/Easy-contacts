import axios from "axios";

export default (history = null) => {
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    let headers = {};
    
    if(localStorage.token) {
        headers.Authorization = `Bearer ${localStorage.token}`;
    }
    
    const axiosInstance = axios.create({
        baseURL,
        headers,
    });
    
    axiosInstance.interceptors.response.use((res) => {
        return new Promise((resolve, reject) => {
            resolve(res);
        });
    },
    (err) => {
        if (err.response.status === 403) {
            if (history) {
                history.push('/auth/login');
            }
            else {
                window.location = '/auth/login';
            }
        }
        else {
            return new Promise((resolve, reject) => {
                reject(err);
            });
        }
    
    });

    return axiosInstance;
}

