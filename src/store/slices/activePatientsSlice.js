import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import instance from '../../constans/instanceAxios';
import { storageIdDoctor } from '../../constans/constans';

// get patient list, get active patient
export const getPatientsList = createAsyncThunk(
    'activePatients/getPatientsList',
    async  (_, {rejectWithValue, dispatch}) => {
        try {
            await instance(`api/patient?doctor_id=${storageIdDoctor}`)
                .then(result => {
                    console.log(result)
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
// get : toggle active patient 

export const getActivePatient = createAsyncThunk(
    'activePatients/getActivePatient',
    async  (id, {rejectWithValue, dispatch}) => {
        try {
            instance(`api/patient/${id}?doctor_id=${storageIdDoctor}`,)
                .then(res => {
                    dispatch(setActivePatients(res.data.data));
                })
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
//  Register new patient, get patient list, get active patient
export const regListActive = createAsyncThunk(
    'activePatients/RegAndUpdateList',
    async  (body, {rejectWithValue, dispatch}) => {
        try {
            await instance.post(`api/patient`,body)
                .then(e => {
                        instance(`api/patient?doctor_id=${storageIdDoctor}`)
                            .then(result => {
                                dispatch(setPatients(result.data.data));
                                instance(`api/patient/${result.data.data[result.data.data.length - 1].id}?doctor_id=${storageIdDoctor}`,)
                                    .then(res => {
                                        dispatch(setActivePatients(res.data.data));
                                    })
                            })
                })
           
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setPending = (state) => {
    state.submit = false;
    state.status = true;
    state.error = null;
}
const setFulfilled = (state) => {
    state.status = false;
}
const setRejected = (state, action) => {
    state.status = true;
    state.error = action.payload;
}

const activePatients = createSlice({
    name: 'activePatients',
    initialState: {
        activePatient:[],
        patients:[],
        status: null,
        error: null,
        submit:null,
    },
    reducers: {
        setActivePatients(state, action) {
            state.activePatient = action.payload;
        },
        setPatients(state, action) {
            state.patients = action.payload;
        },
        creatNewPatients(state, {payload}) {
            state.patients = [...state.patients, payload];
            state.activePatient = payload;
        },
    },
    extraReducers: {
        [getPatientsList.pending]: setPending,
        [getPatientsList.fulfilled]: setFulfilled,
        [getPatientsList.rejected]: setRejected,

        [regListActive.pending]: setPending,
        [regListActive.fulfilled]: setFulfilled,
        [regListActive.rejected]: (state, action) => {
            state.error = action.payload;
            state.submit = true;
        },
    },
});

export const {setActivePatients,setPatients, creatNewPatients} = activePatients.actions;

export default activePatients.reducer;