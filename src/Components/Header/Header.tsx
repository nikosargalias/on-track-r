import React from 'react';
import SearchInput from '../SearchInput/SearchInput';

// scss
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <h1>Books Of Greece</h1>
            <SearchInput placeholder='Search here...' />
        </div>
    );
};

export default Header;
