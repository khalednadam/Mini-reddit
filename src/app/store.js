import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/main/posts/postsSlice';
import singlePostSlice from '../features/main/singlePost/singlePostSlice';
import subredditReducer from '../features/main/subreddits/selectedSubredditSlice';
import selectedSubredditReducer from '../features/main/subreddits/selectedSubredditSlice';
// import commentsReducer from '../features/main/comments/commentsSlice';
export const store = configureStore({
  reducer: {
    posts: postsSlice,
    subreddits: subredditReducer,
    selectedSubreddit: selectedSubredditReducer,
    singlePost: singlePostSlice,
    // comments: commentsReducer
  },
});
