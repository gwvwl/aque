import {createSlice} from '@reduxjs/toolkit';


const activePatients = createSlice({
    name: 'activePatients',
    initialState: {
        activePatient:[],
        patients:[],
    },
    reducers: {
        setActivePatients(state, action) {
            state.activePatient = action.payload;
        },
        setPatients(state, action) {
            state.patients = action.payload;
        },
    },
});

export const {setActivePatients,setPatients} = activePatients.actions;

export default activePatients.reducer;