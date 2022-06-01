import React from 'react';
import { Header } from './features/header/Header';
import './App.css';
import { Posts } from './features/main/posts/Posts'; 
import { Subreddits } from './features/main/subreddits/Subreddits';
function App() {
    
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