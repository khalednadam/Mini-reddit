import React from 'react';
import './post.css';
import { ImArrowUp, ImArrowDown, ImBubble2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
export const Post = ({ post }) =>{
    const {id, author, title, text, upvotes, commentNumber, thumbnail} = post;
    
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
                <h3 className='post-title'>{title}</h3>
            </div>
                <p className='post-text'>{text}</p>
                <div className='thumbnail'>
                    <div>
                        {thumbnail === "self" || thumbnail === "default" ? <div></div> : <div className='thumbnail'><img src={thumbnail} /></div>}
                    </div>
                    
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