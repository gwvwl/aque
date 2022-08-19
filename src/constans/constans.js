
// api 

export const baseURL = 'http://127.0.0.1:8000/';

// localStorage 


const storage = JSON.parse(localStorage.getItem("persist:root"));


export const storageIdDoctor = JSON.parse(storage.user).doctor_id;

export const storageToken = JSON.parse(storage.user).token;

// const storage = 3;

// export const storageIdDoctor = 2;

// export const storageToken = 1;

