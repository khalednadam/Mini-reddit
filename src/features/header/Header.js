import React from 'react';
import './header.css'
export const Header = () =>{
    return(
        <>
            <div className='header'>
                <div className='logo'>
                    <h1>Mini Reddit</h1>
                </div>
            </div>
            <div className='search-bar'>
                <input className='search' name='search' type='search' placeholder='Search...' />
            </div>
        </>
    );
}