import React from 'react';
import { Header } from './features/header/Header';
import './App.css';
import { Posts } from './features/main/posts/Posts'; 
import { Subreddits } from './features/main/subreddits/Subreddits';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
    return (
        <div className="App">
            <div className = 'head'>
                <Header />
            </div>
            <Router>
                <div className='body'>
                    <Posts />
                    <Subreddits />
                </div>
            </Router>
        </div>
    );
}

export default App;