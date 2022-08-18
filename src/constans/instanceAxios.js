import axios from 'axios';
import { baseURL, storageToken } from './constans';

export default  axios.create({
    baseURL: baseURL,
    headers:{ 
        "Accept":  "application/json", 
        "Content-Type": "application/json", 
        "Authorization": `Bearer ${storageToken}`
    },
  });
  

