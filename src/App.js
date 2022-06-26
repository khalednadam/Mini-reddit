import React from 'react';
import { Header } from './features/header/Header';
import './App.css';
import { Posts } from './features/main/posts/Posts'; 
import { Subreddits } from './features/main/subreddits/Subreddits';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SinglePost } from './features/main/singlePost/SinglePost';

function App() {
    return (
        
            <div className="App">
                <div className = 'head'>
                    <Header />
                </div>
                    <div className='body'>
                    <Routes>
                        <Route
                        exact path="*"
                        element={<Navigate to="/r/popular" replace />}
                        />
                        <Route path='/r/:subreddit/' element={ <Posts /> } />
                        <Route path='/r/:subreddit/comments/:id/:title' element={<SinglePost />} />
                    </Routes>
                        <Subreddits />
                    </div>
            </div>
        
    );
}

export default App;