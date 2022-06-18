import React from 'react';
import './subreddits.css';
import { Credit } from '../credit/Credit';
import { useSelector, useDispatch } from 'react-redux';
import { selectSubreddits, selectASubreddit } from './selectedSubredditSlice';
export const Subreddits = () =>{
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    return(
        <>
            <div className='subreddits'>
                {subreddits.map(subreddit => <p onClick={()=> dispatch(selectASubreddit({subreddit}))}>r/{subreddit}</p>)}
                <br />
                <Credit />
            </div>

        </>
    );
}