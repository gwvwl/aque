import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import instance from '../../constans/instanceAxios';


export const signIn = createAsyncThunk(
    'user/signIn',
    async  (body, {rejectWithValue, dispatch}) => {
        try {
            await instance.post(`api/login`, body)
                .then(result => {
                    console.log(result)
                    dispatch(setUser(result.data.data));
                })
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const signUp = createAsyncThunk(
    'user/signUp',
    async  (body, {rejectWithValue, dispatch}) => {
        try {
            await instance.post(`api/register`, body)
                .then(result => {
                    dispatch(setUser(result.data.data));
                })
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logAut = createAsyncThunk(
    'user/logAut',
    async  (body, {rejectWithValue, dispatch}) => {
        try {
            await instance.post(`api/logout`)
                .then(result => {
                    console.log(result)
                    dispatch(logaut());
                })
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setPending = (state) => {
    state.status = false;
    state.error = null;
}
const setRejected = (state, action) => {
    state.status = true;
    state.error = action.payload;
}
const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:[],
        status: null,
        error: null,
        register: null,
    },
    reducers: {
        setUser(state, action) {
            state.email = action.payload.user.email;
            state.token = action.payload.token;
            state.id = action.payload.doctor.user_id;
            state.name = action.payload.user.name;
            state.doctor_id = action.payload.doctor.id;
            state.position = action.payload.doctor.position;
        },
        setRegister(state, {payload}) {
            state.register = payload;
        },
        logaut(state) {},
    },
    extraReducers: {
        [signIn.pending]: setPending,
        [signIn.rejected]: setRejected,
    },
});

export const {setUser, setRegister, logaut} = userSlice.actions;

export default userSlice.reducer;