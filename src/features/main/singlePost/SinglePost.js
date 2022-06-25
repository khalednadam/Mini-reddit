import React, { useEffect } from 'react';
import './singlePost.css';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import {useDispatch, useSelector } from 'react-redux';
import {selectPosts } from '../posts/postsSlice';
import { selectSinglePostId } from './singlePostSlice';
import { loadComments, selectComments } from '../comments/commentsSlice';
import { Comments } from '../comments/Comments';
import { useParams } from 'react-router';
export const SinglePost = () =>{
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const activePostId = useSelector(selectSinglePostId);
    const selectedPost = posts.filter(post => post.id === activePostId);
    const { id, subreddit, title } = useParams();
    // console.log({subreddit, id, title});
    useEffect(()=>{
        dispatch(loadComments({subreddit, id, title}));
    }, [dispatch, subreddit, id, title])
    const comments = useSelector(selectComments);
    
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
    // console.log(selectedPost);
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
                                    {post.image ? <img src={post.image} style={{width: '100%', justifyContent: 'center'}}/>:null}     
                                </div>}
                                {comments.map((comment) => {
                                    console.log('comments '+ comment);
                                    return <Comments comment={comment} key={comment.id} />
                                })}
                            </div>
                        </div>

            })}
            <br/> <br/><br/> <br/>
        </>
    );
    
}