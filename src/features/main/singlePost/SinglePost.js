import React from 'react';
import './singlePost.css';
import { ImArrowUp, ImArrowDown, ImBubble2 } from 'react-icons/im';
import {useSelector } from 'react-redux';
import { loadPosts, selectPosts } from '../posts/postsSlice';
import { selectSelectedSubreddit } from '../subreddits/selectedSubredditSlice';
import { selectSinglePostId } from './singlePostSlice';
import { Link } from 'react-router-dom';
export const SinglePost = () =>{
    const posts = useSelector(selectPosts);
    const activePostId = useSelector(selectSinglePostId);
    const selectedPost = posts.filter(post => post.id === activePostId);
    let width;
    const handleThumbnail = () =>{
        if(selectedPost.image){
            if(selectedPost.image.includes('i.redd.it')){
                width = '70%';
                return selectedPost.image;
            }else if(selectedPost.video){
                selectedPost.thumbnail = null;
            }else{
                width = '20%'
                return selectedPost.thumbnail;
            }
        }

    }

    handleThumbnail();
    console.log(selectedPost);
    return(
        <>
            {selectedPost.map(post => {
                return <div className='post'>
                <div className='post-side'>
                    <div className='post-side-elements'>
                        <ImArrowUp className='up'/>
                        <p className='upvotes'>{post.upvotes}</p>
                        <ImArrowDown className='up' />
                    </div>
                </div>
                <div className='post-author-title'>
                    <p className='post-author'>posted by: u/{post.author}</p>
                    <h3 className='post-title'>
                        {post.title}
                    </h3>
                </div>
                <div className='post-text'>
                    { /* get text without links */} 
                    {<p>{post.text}</p>}
    
                    {post.video && <video width='100%' controls autoPlay loop playsInline>
                        <source src={post.video} type="video/mp4" className='video'/>
                    </video>}
                    
                   
    
                    {<div>
                        {post.image ? <img src={post.image} style={{width: '100%'}}/>:null}     
                    </div>}
                    </div>
                    </div>

            })}
            <br/> <br/><br/> <br/>
        </>
    );
    
}