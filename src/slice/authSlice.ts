import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import {signInPost} from "../api/authApi";

const initialState = {
    token: '',
    // email: '',
    // nickname: ''
}

export const signInPostAsync = createAsyncThunk('signInPostAsync', (param: any) => {
    return signInPost(param)
})

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        signIn: (state, action) => {
            console.log(action.payload)
            state.token = action.payload.token
            return action.payload
        },
        signOut: () => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(signInPostAsync.fulfilled, (state, action) => {
            console.log("fulfilled")
            return action.payload
        }).addCase(signInPostAsync.pending, (state, action) => {
            console.log("pending")
        }).addCase(signInPostAsync.rejected, (state, action) => {
            console.log("rejected")
        })
    }
})

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;