import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts');
    return data;
});



const initialState = {
    posts: {
        items: [],
        status: 'loading'
    }
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.posts.items = [];
            state.posts.status = 'loading'
        },
        [fetchPosts.fulfilled]: (action, state) => {
            state.posts.items = action.payload;
            state.posts.status = 'loaded'
        },
        [fetchPosts.fulfilled]: (state) => {
            state.posts.items = [];
            state.posts.status = 'error'
        }
    }
})



export const postsReducer = postsSlice.reducer;