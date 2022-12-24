import { loginFailure, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccessful } from "./userSlice"
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


export const logout = async (dispatch) => {
    dispatch(logoutStart());

    try {
        dispatch(logoutSuccessful())
    } catch (error) {
        dispatch(logoutFailed())
    }
}

