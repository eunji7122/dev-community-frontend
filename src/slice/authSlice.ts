import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getToken} from "../api/authApi";
import {getCookie, removeCookie, setCookie} from "../util/cookieUtil";

export interface Token {
    accessToken: String,
    refreshToken: String
}

const initialState: Token = {
    accessToken: '',
    refreshToken: ''
}

const loadTokenCookie = () => {
    return getCookie('accessToken')
}

export const getTokenAsync = createAsyncThunk('getTokenAsync', (param: any) => {
    return getToken(param)
})

const authSlice = createSlice({
    name: 'authSlice',
    initialState: loadTokenCookie() || initialState,
    reducers: {
        setToken: (state, action: PayloadAction<Token>) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            setCookie("accessToken", JSON.stringify(action.payload.accessToken), 1)
            setCookie("refreshToken", JSON.stringify(action.payload.refreshToken), 2)
        },
        clearToken: () => {
            removeCookie('accessToken')
            removeCookie('refreshToken')
            return {...initialState}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTokenAsync.pending, (state, action) => {
            // pending: 대기(미완료)
            console.log("pending")
        }).addCase(getTokenAsync.fulfilled, (state, { payload }) => {
            // fulfilled: 이행(완료)
            console.log("fulfilled")

            if (!payload.error) {
                setCookie("accessToken", JSON.stringify(payload.accessToken), 1)
                setCookie("refreshToken", JSON.stringify(payload.refreshToken), 2)
            }

            return payload
        }).addCase(getTokenAsync.rejected, (state, { payload }) => {
            // rejected: 거절(오류)
            console.log("rejected")
        })
    }
})

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;