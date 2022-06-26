import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Post } from './post/Post';
import './post/post.css';
import { loadPosts, selectFailed, selectLoading, selectPosts } from './postsSlice';
import { useParams } from 'react-router';

export const Posts = () =>{
    const dispatch = useDispatch();
    const { subreddit } = useParams();
    const posts = useSelector(selectPosts);
    const failed = useSelector(selectFailed);
    useEffect(()=>{
        dispatch(loadPosts(subreddit))
        .then(unwrapResult);
        window.scrollTo(0, 0)
        }, [dispatch, subreddit]);
    if(failed || posts === 'failed'){
        return(
            <div style={{gridColumn: '6 / 8'}}>
                <h1 style={{alignSelf : 'center'}}>Failed</h1>
            </div>
        )
    }
    return(
        <div className='posts-list'>
            <div>
                
                <h2>r/{subreddit}</h2>
                {(posts.length < 1) ? 'No posts' : posts.map(post =>{
                    
                    return <Post post={post} key={post.id} />
                })}
            </div>
        </div>
    );    
}
