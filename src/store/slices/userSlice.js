import {createSlice} from '@reduxjs/toolkit';




const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:[],
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
        logaut(state) {},
    },
});

export const {setUser, logaut} = userSlice.actions;

export default userSlice.reducer;