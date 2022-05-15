import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../../../app/Reddit";


// TODO ~ test if it actually works
// * gets posts for subreddit 
// * gets posts for r/softwareengineering if subreddit not specified 
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async(subreddit = 'r/softwareengineering') =>{
        const response = await getSubredditPosts(subreddit);
        const json = await response.json();
        console.log(json);
        return json;
    }
);

//  * TODO: add reducers
export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts:[],
        isLoading: false,
        failed: false
    },
    reducers:{
        addPost: (state, action) =>{
            state.posts.push(action.payload);
        }
    },
    extraReducers:{
        [getPosts.pending]: (state, action) =>{
            state.isLoading = true;
            state.failed = false;
        },
        [getPosts.fulfilled]: (state, action) =>{
            state.isLoading = false;
            state.failed = false;
            state.addPost(action);
        },
        [getPosts.rejected]: (state, action) =>{
            state.isLoading = false;
            state.failed = true;
        }
    }
});