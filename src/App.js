import React from 'react';
import { Header } from './features/header/Header';
import './App.css';
import {getSubreddit, getSubredditPosts, getCommentsForPost} from './app/Reddit';
import { Post } from './features/main/posts/post/Post';
import { Posts } from './features/main/posts/Posts'; 
import { Subreddits } from './features/main/subreddits/Subreddits';
function App() {
    // console.log(getSubredditPosts(getSubredditPosts('syria')))
  return (
    <div className="App">
        <div className = 'head'>
            <Header />
        </div>
        <div className='body'>
            <Post />
            <Posts />
            <Subreddits />
        </div>
    </div>
  );
}

export default App;