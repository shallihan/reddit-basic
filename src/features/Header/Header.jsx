import React from 'react';
import { FaReddit } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <FaReddit className="logo-icon"/>
                <p>Reddit<span>basic</span></p>
            </div>
            <form className="search">
                <input type="text" placeholder="Search" />
                <button type="submit"><HiSearch /></button>
            </form>
        </header>
    );

}

export default Header;
