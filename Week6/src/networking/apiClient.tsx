import axios, { AxiosInstance } from 'axios';
export class apiClient{
    protected axiosInstance: AxiosInstance;
    constructor(){
        this.axiosInstance = axios.create({
            baseURL: 'https://66fa8b58afc569e13a9c2ad1.mockapi.io/apilab6/items/',
            timeout: 10000
        })
    }
}