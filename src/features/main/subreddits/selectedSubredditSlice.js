import { createSlice } from "@reduxjs/toolkit";

export const selectedSubredditSlice = createSlice({
    name: 'selectedSubreddit',
    initialState: 'memes',
    reducers: {
        selectedSubreddit: (state, action) =>{
            return state = action.payload.subreddit;
        },
    }
});
export const selectSelectedSubreddit = (state) => state.selectedSubreddit;
export const { selectedSubreddit } = selectedSubredditSlice.actions;
export default selectedSubredditSlice.reducer;