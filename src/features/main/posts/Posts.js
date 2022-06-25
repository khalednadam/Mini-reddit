import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Post } from './post/Post';
import './post/post.css';
import { loadPosts, selectFailed, selectLoading, selectPosts } from './postsSlice';
import { selectSelectedSubreddit } from '../subreddits/selectedSubredditSlice';
import { SinglePost } from '../singlePost/SinglePost';
export const Posts = () =>{
    const dispatch = useDispatch();
    
    const posts = useSelector(selectPosts);
    const failed = useSelector(selectFailed);
    const loading = useSelector(selectLoading);
    let selectedSubreddit = useSelector(selectSelectedSubreddit);
    // console.log(selectedSubreddit);
    useEffect(()=>{
        dispatch(loadPosts(selectedSubreddit))
        .then(unwrapResult);
        }, [dispatch, selectedSubreddit]);
    if(loading){
        return(
            <div style={{gridColumn: '6 / 8'}}>
                <h1>Loading...</h1>
                
            </div>
        );
    }
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
                <h2>r/{selectedSubreddit}</h2>
                {(posts.length < 1) ? 'No posts' : posts.map(post =>{
                    
                    return <Post post={post} key={post.id} />
                })}
            </div>
        </div>
    );    
}
