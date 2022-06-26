import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// * gets posts from a subreddit and if there is not subreddit defined it will get posts from 'r/softwareengineering'
export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async (subreddit) =>{
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        
        return json;
        
    } 
    
);


export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data:[],
        isLoading: false,
        failedToLoadPosts: false
    },
    
    extraReducers:{
        [loadPosts.pending]: (state) =>{
            state.isLoading = true;
            state.failedToLoadPosts = false;
        },
        [loadPosts.fulfilled]: (state, action) =>{
            state.isLoading = false;
            state.failedToLoadPosts = false;
            state.data = (action.payload.data !== undefined) ? action.payload.data.children.map((item) =>{
                return {
                    id: item.data.id,
                    author: item.data.author,
                    subreddit: item.data.subreddit,
                    title: item.data.title,
                    text: item.data.selftext,
                    upvotes: item.data.ups,
                    commentNumber: item.data.num_comments,
                    thumbnail: item.data.thumbnail,
                    image: item.data.url_overridden_by_dest,
                    video: item.data.secure_media?.reddit_video?.fallback_url,
                    permalink: item.data.permalink,
                    url_overridden_by_dest: item.data.url_overridden_by_dest
                }
            }) : 'failed';
        },
        [loadPosts.rejected]: (state) =>{
            state.isLoading = false;
            state.failedToLoadPosts = true;
        }
    }
});
export const selectLoading = (state) => state.posts.isLoading;
export const selectFailed = (state) => state.posts.failedToLoadPosts;
export const selectPosts = (state) => state.posts.data;
export default postsSlice.reducer;