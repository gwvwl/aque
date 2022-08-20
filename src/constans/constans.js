// api

export const baseURL = 'http://127.0.0.1:8000/';

// localStorage

const storage = JSON.parse(localStorage.getItem('persist:root'));
export const storageToken = JSON.parse(storage.user).token;
export const storageIdDoctor = JSON.parse(storage.user).doctor_id;
