import { createSlice } from "@reduxjs/toolkit";

export const selectedSubredditSlice = createSlice({
    name: 'selectedSubreddit',
    // initialState: 'memes',
    initialState: {
        selected: 'popular',
        subreddits: ['memes', 'softwareengineering', 'movies', 'politics', 'sports', 'gaming', 'pics']
    },
    reducers: {
        selectASubreddit: (state, action) =>{
            state.selected = action.payload.subreddit;
            
        },
    }
});
export const selectSelectedSubreddit = (state) => state.selectedSubreddit.selected;
export const selectSubreddits = (state) => state.selectedSubreddit.subreddits;
export const { selectASubreddit } = selectedSubredditSlice.actions;
export default selectedSubredditSlice.reducer;