import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart:(state) => {
            state.isFetching = true;
        },
        loginSuccess:(state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure:(state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutStart:(state) => {
            state.isFetching = true;
        },
        logoutSuccessful:(state) => {
            state.isFetching = false;
            state.currentUser = null;
        },
        logoutFailed:(state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, logoutStart, logoutSuccessful, logoutFailed } = userSlice.actions
export default userSlice.reducer;