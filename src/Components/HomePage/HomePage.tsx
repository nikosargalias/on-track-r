import React, { memo } from 'react';
import Header from '../Header/Header';
import BooksList from '../BooksList/BooksList';
import './HomePage.scss';

const HomePage = () => {
    return (
        <div className='home'>
            <Header />
            <BooksList />
        </div>
    );
};

export default memo(HomePage);
