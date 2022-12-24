import { loginFailure, loginStart, loginSuccess, logoutSuccessful, signupFailure, signupStart, signupSuccess } from "./userSlice"
import { publicRequest } from "../requestMethods"


export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const signup = async (dispatch, user) => {
    dispatch(signupStart());

    try {
        const res = await publicRequest.post("/auth/register", user)
        dispatch(signupSuccess(res.data))
    } catch (error) {
        dispatch(signupFailure())
    }
}


export const logout = (dispatch) => {
    dispatch(logoutSuccessful())
}

