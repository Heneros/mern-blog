import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios';


export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    const { data } = await axios.post('/auth/login', params);
    return data;
});


export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    const { data } = await axios.post('/auth/register', params);
    return data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async (params) => {
    const { data } = await axios.post('/auth/me', params);
    return data;
});

const initialState = {
    data: null,
    status: 'loading'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.status = 'loading';
            state.data = null
        },
        [fetchAuth.fulfilled]: (state) => {
            state.status = 'loaded';
            state.data = null
        },
        [fetchAuth.rejected]: (state) => {
            state.status = 'error';
            state.data = null
        },
    }
})


