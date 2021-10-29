import axios from 'axios';
import { axiosWithAuth } from './axiosAuth';

export const getHealth = () => {
    axiosWithAuth().get('http://localhost:8080/api/health').then(res => {
        console.log(res.data);
    })
}

export const getProtected = () => {
    axiosWithAuth().get('http://localhost:8080/api/protected').then(res => {
        console.log(res.data)
    })
}