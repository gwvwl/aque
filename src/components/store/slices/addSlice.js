import {createSlice} from '@reduxjs/toolkit';


const addSlice = createSlice({
    name: 'add',
    initialState: {},
    reducers: {
        setPatients(state) {
            state.patients = !state.patients;
        },
        setMedication(state, action) {
            state.medication = !state.medication;
        },
        setPayments(state, action) {
            state.payments = !state.payments;
        },
        setFeatures(state, action) {
            state.features = !state.features;
        },
    },
});

export const {setPatients, setMedication, setPayments, setFeatures, setPatientsFalse, setAdd} = addSlice.actions;

export default addSlice.reducer;