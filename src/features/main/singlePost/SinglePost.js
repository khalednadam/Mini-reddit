import React, { useEffect } from 'react';
import './singlePost.css';
import { ImArrowUp, ImArrowDown, ImArrowLeft2 } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../posts/postsSlice';
import { selectSinglePostId } from './singlePostSlice';
import { loadComments, selectComments, selectFailedToLoadComments, selectIsLoadingComments } from '../comments/commentsSlice';
import { Comments } from '../comments/Comments';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { CommentsLoading } from '../commentsLoading/CommentsLoading';
export const SinglePost = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector(selectPosts);
    const activePostId = useSelector(selectSinglePostId);
    const selectedPost = posts.filter(post => post.id === activePostId);
    const { id, subreddit, title } = useParams();
    const failedToLoadComments = useSelector(selectFailedToLoadComments);
    const isLoadingComments = useSelector(selectIsLoadingComments);
    // console.log({subreddit, id, title});
    useEffect(()=>{
        dispatch(loadComments({subreddit, id, title}));
        window.scrollTo(0, 0)
    }, [dispatch, subreddit, id, title])
    const comments = useSelector(selectComments);
    
    let media;
    let width;
    let handleThumbnail = (post1) =>{
        if(post1){
            if(post1.image){
                if(post1.image.includes('i.redd.it')){
                    media = post1.image;
                    width = '100%';
                    return media;
                }else if(post1.image.includes('v.redd.it')){
                    width = '100%';
                    media = post1.video;
                    return media;
                }else if(post1.image.includes('v.redd.it')){
                    media = null;
                }else{
                    width = '20%';
                    media = post1.thumbnail;
                    return media;
                }
            }}

    }

    handleThumbnail();
    // console.log(selectedPost);
    
    return(
        <div className='single-post-page'>
            {selectedPost.map(post => {
                return <div className='single-post'>
                            <div className='single-post-side'>
                            <div className='back'>
                                            <ImArrowLeft2 className='back-icon' onClick={() => navigate(-1)}/>
                                    </div>
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
    
                                {post.video ? <video className='single-post-video' width='100%' controls autoPlay loop playsInline>
                                    <source src={handleThumbnail(post)} type="video/mp4" className='single-post-video'/>
                                </video> : <div>
                                    {post.image ? <a href={post.url_overridden_by_dest} target="_blank"><img src={handleThumbnail(post)} style={{width: width, justifyContent: 'center'}}/></a>:null}     
                                </div>}
                                <div className='comments'>
                                    {isLoadingComments ? <CommentsLoading /> : 
                                    <h4 style={{marginTop: '100px'}}>Comments</h4>}
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