import React from 'react';
import './comments.css';
import { useSelector } from 'react-redux/es/exports';
import { selectIsLoadingComments } from './commentsSlice';
import { CommentsLoading } from '../commentsLoading/CommentsLoading';
export const Comments = ({ comment }) =>{
    console.log('comment ' + comment);
    const commentAuthor = comment.author;
    const commentBody = comment.body;
    const isLoadingComments = useSelector(selectIsLoadingComments);
    if(isLoadingComments){
        return <CommentsLoading />
    }
    return(
        commentAuthor ?
        <div className='comment'>
            <br />
            <h5>u/{commentAuthor}</h5>
            <p>{commentBody}</p>
            <br />
        </div> : null
    );
}