import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getToken} from "../api/authApi";

export interface Token {
    token: String
}

const initialState: Token = {
    token: '',
}

export const getTokenAsync = createAsyncThunk('getTokenAsync', (param: any) => {
    return getToken(param)
})

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<Token>) => {
            state.token = action.payload.token
        },
        signOut: () => {
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

            return payload
        }).addCase(getTokenAsync.rejected, (state, { payload }) => {
            // rejected: 거절(오류)
            console.log("rejected")
        })
    }
})

export const { setToken, signOut } = authSlice.actions;
export default authSlice.reducer;