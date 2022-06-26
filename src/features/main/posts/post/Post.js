import React from 'react';
import './post.css';
import { ImArrowUp, ImArrowDown, ImBubble2 } from 'react-icons/im';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeActivePostId } from '../../singlePost/singlePostSlice';
import { selectLoading } from '../postsSlice';
import { PostLoading } from '../../postsLoading/PostLoading';
export const Post = ({ post }) =>{
    const {author, title, text, upvotes, commentNumber, permalink, url_overridden_by_dest} = post;
    const { id } = useParams();
    const isLoadingPosts = useSelector(selectLoading);
    let {image, video, thumbnail} = post;
    let width;
    const dispatch = useDispatch();
    const handleThumbnail = () =>{
        if(image){
            if(image.includes('i.redd.it')){
                width = '70%';
                return image;
            }else if(video){
                thumbnail = null;
            }else{
                width = '20%'
                return thumbnail;
            }
        }

    }

    handleThumbnail();
    if(isLoadingPosts){
        return <PostLoading />
    }
    return(
        <div className='post'>
            <div className='post-side'>
                <div className='post-side-elements'>
                    <ImArrowUp className='up'/>
                    <p className='upvotes'>{upvotes}</p>
                    <ImArrowDown className='up' />
                </div>
            </div>
            <div className='post-author-title'>
                <p className='post-author'>posted by: u/{author}</p>
                <h3 className='post-title'>
                    <Link to={`${permalink}`} onClick={() => dispatch(changeActivePostId(post.id))}>{title}</Link>
                </h3>
            </div>
            <div className='post-text'>
                { /* get text without links */} 
                {video && <video width='100%' controls autoPlay loop playsInline>
                    <source src={video} type="video/mp4" className='video'/>
                </video>}
                
               

                {<div>
                    {image ? <a href={url_overridden_by_dest} target="_blank" ><img src={handleThumbnail()} style={{width: width}}/></a>:null}    
                </div>}

            </div>
            <div className='post-footer'>
                <ImBubble2 className='comment-icon'/>
                <div className='post-comment-number'>
                    <p>{commentNumber}</p>
                </div>
            </div>
        </div>
    );
}
