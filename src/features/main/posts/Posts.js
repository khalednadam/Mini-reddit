import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Post } from './post/Post';
import { loadPosts, selectFailed, selectLoading, selectPosts } from './postsSlice';
export const Posts = () =>{
    const dispatch = useDispatch();

    const posts = useSelector(selectPosts);
    const failed = useSelector(selectFailed);
    const loading = useSelector(selectLoading);

    useEffect(()=>{
        dispatch(loadPosts('softwareengineering'))
        .then(unwrapResult);
        }, [dispatch]);
    if(loading){
        return(
            <div style={{gridColumn: '6 / 8'}}>
                <h1>Loading...</h1>
            </div>
        );
    }
    if(failed || posts === 'failed'){
        return(
            <div>
                <h1 style={{alignSelf : 'center'}}>Failed</h1>
            </div>
        )
    }
    return(
        <div className='posts-list'>
            <h2>r/Softwareengineering</h2>
            <div>
                {(posts.length < 1) ? 'No posts' : posts.map(post =>{
                    console.log(post.thumbnail);
                    return <Post post={post} key={post.id} />
                })}
            </div>
        </div>
    );    
}