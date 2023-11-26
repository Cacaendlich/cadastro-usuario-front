import axios from 'axios';

export default class HttpService {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL + '/api'
        });
    }
    //métodos
    post(url, data){
        return this.axios.post(url, data);
    }
}