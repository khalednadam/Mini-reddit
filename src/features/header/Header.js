import React from 'react';
import './header.css'
import logo from '../../imgs/reddit.png';
export const Header = () =>{
    return(
        <>
            <div className='header'>
                <div className='logo'>
                    <img src={logo} />
                    <p>mini reddit</p>
                </div>
            </div>
            <div className='search-bar'>
                <input className='search' name='search' type='search' placeholder='Search...' />
            </div>
        </>
    );
}