import { createSlice } from "@reduxjs/toolkit";

export const subredditSlice = createSlice({
    name: 'subreddits',
    initialState:['tech', 'politics', 'sports', 'pics', 'memes', 'games', 'movies', 'gaming'],
});

export default subredditSlice.reducer;
export const selectSubreddits = (state) => state.subreddits; 