import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/main/posts/postsSlice';
import subredditReducer from '../features/main/subreddits/selectedSubredditSlice';
import selectedSubredditReducer from '../features/main/subreddits/selectedSubredditSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditReducer,
    selectedSubreddit: selectedSubredditReducer
  },
});
