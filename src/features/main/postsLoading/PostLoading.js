import './postLoading.css';
import React from 'react';
import { CommentsLoading } from '../commentsLoading/CommentsLoading';
export const PostLoading = () =>{
    return(
        <>
            <div className='post-loading'>
                <div className='text-loading'></div>
                <div className='text-loading1'></div>
                <div className='media-loading'></div>
            </div>
            
        </>
    );
}