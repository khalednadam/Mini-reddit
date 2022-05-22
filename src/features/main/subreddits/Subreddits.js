import React from 'react';
import './subreddits.css';
import { Credit } from '../credit/Credit';
export const Subreddits = () =>{
    return(
        <>
            <div className='subreddits'>
                <p>r/Softwareengineering</p>
                <p>r/Home</p>
                <p>r/Design</p>
                <p>r/Tech</p>
                <p>r/Memes</p>
                <p>r/Politics</p>
                <p>r/Sports</p>
                <br />
                <Credit />
            </div>
            
        </>
    );
}