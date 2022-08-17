import {createSlice} from '@reduxjs/toolkit';




const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:[],
    },
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.doctor_id = action.payload.doctor_id;
            state.position = action.payload.position;
        },
        logaut(state) {},
    },
});

export const {setUser, logaut} = userSlice.actions;

export default userSlice.reducer;