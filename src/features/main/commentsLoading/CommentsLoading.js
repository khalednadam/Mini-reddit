import React from 'react';
import './commentsLoading.css';
export const CommentsLoading = () =>{
    return(
        <>
            <div className='comment-loading'>
                <div className='usename-loading'></div>
                <div className='comment-text-loading'></div>
            </div>
        </>
    );
}