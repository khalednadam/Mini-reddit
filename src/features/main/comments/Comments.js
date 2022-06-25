import React from 'react';
import './comments.css';

export const Comments = ({ comment }) =>{
    console.log('comment ' + comment);
    const commentAuthor = comment.author;
    const commentBody = comment.body;
    return(
        <div className='comment'>
            <br />
            <h4>by: u/{commentAuthor}</h4>
            <p>{commentBody}</p>
            <br />
        </div>
    );
}