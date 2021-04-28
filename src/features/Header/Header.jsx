import React, { useState, useEffect } from 'react';
import { FaReddit } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';
import { setSearchTerm } from '../../store/redditSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (event) => {
        setSearchTermLocal(event.target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = (event) => {
        event.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };

    return (
        <header>
            <div className="logo">
                <FaReddit className="logo-icon"/>
                <p>Reddit<span>basic</span></p>
            </div>
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input 
                type="text" 
                placeholder="Search"
                value={searchTermLocal}
                onChange={onSearchTermChange}
                 />
                <button type="submit" onClick={onSearchTermSubmit}><HiSearch /></button>
            </form>
        </header>
    );

}

export default Header;
