import React from 'react';
import { BookCardProps } from './CardTypes';
import { useDispatch } from 'react-redux';

// scss
import './Card.scss';

const BookCard = ({
    book,
    dispatchAction,
    onClick,
    isFavorite,
}: BookCardProps) => {
    const dispatch = useDispatch();

    const handleFavoriteBook = () => {
        if (dispatchAction) {
            dispatch(dispatchAction(book));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.target instanceof HTMLButtonElement) {
            return;
        }

        if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
            if (onClick) onClick(e.target);
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target instanceof HTMLButtonElement) {
            return;
        }
        if (onClick) onClick(e.target);
    };

    return (
        <article
            className='book-card'
            role='button'
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
        >
            <h2 className='book-card__title'>Title: {book.book_title}</h2>
            <div className='book-card__info'>
                <div>
                    <p>Author: {book.book_author}</p>
                    <p>Publication city: {book.book_publication_city}</p>
                    <p>Publication country: {book.book_publication_country}</p>
                    <p>Publication year: {book.book_publication_year}</p>
                </div>
                <button
                    aria-label='Add book to favorites'
                    onClick={handleFavoriteBook}
                    className={`${
                        isFavorite ? 'is-favorite' : ''
                    } book-card__favorite`}
                >
                    &#10084;
                </button>
            </div>
        </article>
    );
};

export default BookCard;
