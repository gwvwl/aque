import axios from 'axios';
import { baseURL, storageToken } from './constans';

export default axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Bearer ${storageToken}`,
    },
});
