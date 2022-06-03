import { createSlice } from "@reduxjs/toolkit";

export const subredditSlice = createSlice({
    name: 'subreddit',
    initialState:['tech', 'politics', 'sports', 'pics', 'memes', 'games', 'movies'],
});

export default subredditSlice.reducer;