import React from 'react';
import { Header } from './features/header/Header';
import './App.css';
import {getSubreddit, getSubredditPosts} from './app/Reddit';

function App() {
  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;