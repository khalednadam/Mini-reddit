import React from 'react';
import './header.css'
import logo from '../../imgs/reddit.png';
import { selectASubreddit } from '../main/subreddits/selectedSubredditSlice';
import { useDispatch } from 'react-redux';
export const Header = () =>{
    let subreddit;
    const dispatch = useDispatch();
    const search = async(event) =>{
        subreddit = event.target.value;
        dispatch(selectASubreddit({subreddit}));
        event.target.value = '';
    }
    return(
        <>
            <div className='header'>
                <div className='logo'>
                    <img src={logo} />
                    <p>mini reddit</p>
                </div>
            </div>
            <div className='search-bar'>
                <input className='search' name='search' autoComplete='off' type='search' placeholder='Search for a subreddit...' onKeyDown={e => e.key === 'Enter' ?  search(e) : ''} />
            </div>
        </>
    );
}