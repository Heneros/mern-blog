import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts');
    return data;
});
export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
    const { data } = await axios.get('/tags');
    return data;
});

export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async (id) => {
    const { data } = await axios.delete(`/posts/${id}`);
    return data;
});




const initialState = {
    posts: {
        items: [],
        status: 'loading'
    },
    tags: {
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
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload;
            state.posts.status = 'loaded'
        },
        [fetchPosts.rejected]: (state) => {
            state.posts.items = [];
            state.posts.status = 'error'
        },

        [fetchTags.pending]: (state) => {
            state.tags.status = 'loading';
            state.tags.items = [];
        },
        [fetchTags.fulfilled]: (state, action) => {
            state.tags.status = 'loaded';
            state.tags.items = action.payload;
        },
        [fetchTags.pending]: (state) => {
            state.tags.status = 'error';
            state.tags.items = [];
        },

        [fetchRemovePost.pending]: (state, action) => {
            ///Поиск статьи obj._id и сравнением
            state.posts.items = state.posts.items.filter((obj) => obj._id !== action.meta.arg)
        },
    }
})



export const postsReducer = postsSlice.reducer;