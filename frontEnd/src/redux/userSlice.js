import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        isSuccess: false,
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
        signupStart:(state) => {
            state.isFetching = true;
            state.isSuccess = false;
        },
        signupSuccess:(state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isSuccess = true;
        },
        signupFailure:(state) => {
            state.isFetching = false;
            state.error = true;
            state.isSuccess = false;
        },
        logoutSuccessful:(state) => {
            state.isFetching = false;
            state.currentUser = null;
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, signupStart, signupSuccess, signupFailure, logoutStart, logoutSuccessful, logoutFailed } = userSlice.actions
export default userSlice.reducer;