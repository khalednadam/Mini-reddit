import React from 'react';
import { Header } from './features/header/Header';
import './App.css';
import { Posts } from './features/main/posts/Posts'; 
import { Subreddits } from './features/main/subreddits/Subreddits';
import { useState } from 'react';
function App() {
    const [posts, setPosts] = useState([]);
    const [subreddit, setSubreddit] = useState("r/softwareengineering");
    return (
    <div className="App">
        <div className = 'head'>
            <Header />
        </div>
        <div className='body'>
            <Posts />
            <Subreddits />
            
        </div>
    </div>
  );
}

export default App;