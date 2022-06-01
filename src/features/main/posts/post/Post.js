import React from 'react';
import './post.css';
import { ImArrowUp, ImArrowDown, ImBubble2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
export const Post = ({ post }) =>{
    const {id, author, title, text, upvotes, commentNumber} = post;
    let {image, video, domain, thumbnail} = post;
    let width;
    const handleLink = text1 =>{
        if(text1){
            if(text1.includes("&amp")){
                return false;
            }else{
                return true;
            }
        }
    }
    console.log(text.length);
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
            <div className='post-text'>
                { /* get text without links */} 
                {/* {text.length <= 600 || handleLink(text) ? <p>{text}</p> : <div></div>} */}

                {video && <video width='100%' controls autoPlay >
                    <source src={video} type="video/mp4" />
                </video>}
                
               

                {<div>
                    {image ? <img src={handleThumbnail()} style={{width: width}}/>:<div></div>}    
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