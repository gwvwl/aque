import {createSlice} from '@reduxjs/toolkit';


const addSlice = createSlice({
    name: 'add',
    initialState: {},
    reducers: {
        setPatients(state) {
            state.patients = !state.patients;
        },
        setMedication(state) {
            state.medication = !state.medication;
        },
        setPayments(state) {
            state.payments = !state.payments;
        },
        setFeatures(state) {
            state.features = !state.features;
        },
        setAdd(state) {
            state.patients = false;
            state.medication = false;
            state.payments = false;
            state.features = false;
        },
    },
});

export const {setPatients, setMedication, setPayments, setFeatures, setPatientsFalse, setAdd} = addSlice.actions;

export default addSlice.reducer;