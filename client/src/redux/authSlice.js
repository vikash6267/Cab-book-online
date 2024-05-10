    import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,

    };

    const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser(state, value) {
            state.user = value.payload
        },
    
        setToken(state, value) {
        state.token = value.payload;
        },
    },
    });

    export const {setUser, setToken } = authSlice.actions;

    export default authSlice.reducer;
