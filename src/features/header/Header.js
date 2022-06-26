import React from 'react';
import './header.css'
import logo from '../../imgs/reddit.png';
import { selectASubreddit } from '../main/subreddits/selectedSubredditSlice';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
export const Header = () =>{
    const navigate = useNavigate();
    let subreddit;
    const dispatch = useDispatch();
    const search = async(event) =>{
        subreddit = event.target.value;
        dispatch(selectASubreddit({subreddit}));
        event.target.value = '';
        navigate({
            pathname: `r/${subreddit}`
        })
    }
    return(
        <>
            <div className='header'>
            <NavLink to={'/r/popular'}>
                <div className='logo'>
                    <img src={logo} style={{margin:"10px"}} />
                    <p>mini reddit</p>
                </div>
                </NavLink>
            </div>
            <div className='search-bar'>
                <input className='search' name='search' autoComplete='off' type='search' placeholder='Search for a subreddit...' onKeyDown={e => e.key === 'Enter' ?  search(e) : ''} />
            </div>
        </>
    );
}