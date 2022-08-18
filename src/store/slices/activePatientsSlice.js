import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import instance from '../../constans/instanceAxios';
import { storageIdDoctor } from '../../constans/constans';

export const getPatientsList = createAsyncThunk(
    'activePatients/getPatientsList',
    async  (_, {rejectWithValue, dispatch}) => {
        try {
            await instance(`api/patient?doctor_id=${storageIdDoctor}`)
                .then(result => {
                    dispatch(setPatients(result.data.data));
                    instance(`api/patient/${result.data.data[0].id}?doctor_id=${storageIdDoctor}`,)
                        .then(res => {
                            dispatch(setActivePatients(res.data.data));
                        })
                })
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const updateList = createAsyncThunk(
    'activePatients/updateList',
    async  (_, {rejectWithValue, dispatch}) => {
        try {
            await instance(`api/patient?doctor_id=${storageIdDoctor}`)
                .then(result => {
                    dispatch(setPatients(result.data.data));
                    instance(`api/patient/${result.data.data[result.data.data.length - 1].id}?doctor_id=${storageIdDoctor}`,)
                        .then(res => {
                            dispatch(setActivePatients(res.data.data));
                        })
                })
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = true;
    state.error = action.payload;
}

const activePatients = createSlice({
    name: 'activePatients',
    initialState: {
        activePatient:[],
        patients:[],
        status: true,
        error: null,
    },
    reducers: {
        setActivePatients(state, action) {
            state.activePatient = action.payload;
        },
        setPatients(state, action) {
            state.patients = action.payload;
        },
    },
    extraReducers: {
        [getPatientsList.pending]: (state) => {
            state.status = true;
            state.error = null;
        },
        [getPatientsList.fulfilled]: (state) => {
            state.status = false;
            
        },
        [getPatientsList.rejected]: setError,
        [updateList.pending]: (state) => {
            state.status = true;
            state.error = null;
        },
        [updateList.fulfilled]: (state) => {
            state.status = false;
            
        },
        [updateList.rejected]: setError,
    },
});

export const {setActivePatients,setPatients} = activePatients.actions;

export default activePatients.reducer;