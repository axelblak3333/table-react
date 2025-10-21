import React from 'react';
import PropTypes from 'prop-types';

import './Search.css';

import searchIcon from '../../assets/icons/search.svg';

const SearchComponent = () => {
    return (
        <div className='search'>
            <input placeholder="Найти пользователя"/>
            <img src={searchIcon}/>
        </div>
    )
};

export default SearchComponent;