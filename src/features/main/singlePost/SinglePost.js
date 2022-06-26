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
        window.scrollTo(0, 0)
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
        <div className='single-post-page'>
            {selectedPost.map(post => {
                return <div className='single-post'>
                            <div className='single-post-side'>
                                <div className='single-post-side-elements'>
                                    <ImArrowUp className='single-post-up arrow'/>
                                    <p className='single-post-upvotes'>{post.upvotes}</p>
                                    <ImArrowDown className='single-post-down arrow' />
                                    
                                </div>
                            </div>
                            <div className='single-post-author-title'>
                                <p className='single-post-author'>posted by: u/{post.author}</p>
                                <h3 className='single-post-title'>
                                    {post.title}
                                </h3>
                            </div>
                            <div className='single-post-text'>
                                { /* get text without links */} 
                                {<p>{post.text}</p>}
    
                                {post.video && <video className='single-post-video' width='100%' controls autoPlay loop playsInline>
                                    <source src={post.video} type="video/mp4" className='single-post-video'/>
                                </video>}
                    
                   
    
                                {<div>
                                    {post.image ? <img src={handleThumbnail()} style={{width: '100%', justifyContent: 'center'}}/>:null}     
                                </div>}
                                <div className='comments'>
                                    <h2>Comments</h2>
                                    {comments.map((comment) => {
                                        console.log('comments '+ comment);
                                        return <Comments comment={comment} key={comment.id} />
                                    })}
                                </div>
                            </div>
                        </div>

            })}
            <br/> <br/><br/> <br/>
        </div>
    );
    
}