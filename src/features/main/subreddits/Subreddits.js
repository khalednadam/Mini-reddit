import React from 'react';
import './subreddits.css';
import { Credit } from '../credit/Credit';
import { useSelector, useDispatch } from 'react-redux';
import { selectSubreddits, selectASubreddit } from './selectedSubredditSlice';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../singlePost/singlePost.css';
export const Subreddits = () =>{
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    return(
        <>
            <div className='subreddits'>
                {subreddits.map(subreddit => <p className='subreddit-list-item' onClick={()=> dispatch(selectASubreddit({subreddit}))}><Link to={`r/${subreddit}`}>r/{subreddit}</Link></p>)}
                <br />
                <Credit />
            </div>

        </>
    );
}