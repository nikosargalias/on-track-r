import React, { useCallback, useEffect, useRef } from 'react';
import { BookType } from '../../Shared/Types/BookType';
import './Modal.scss';

const Modal = ({
    book,
    handleClose,
    focusElem,
}: {
    book: BookType;
    handleClose: () => void;
    focusElem?: HTMLElement | undefined;
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const handleClickOnOverlay = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const target = e.target as HTMLDivElement;
            if (target.id !== 'modal-overlay') {
                return;
            }
            handleClose();
        },
        []
    );

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.focus();
        }

        return () => {
            if (focusElem) {
                focusElem.focus();
            }
        };
    }, [buttonRef]);
    return (
        <div
            className='overlay modal'
            id='modal-overlay'
            onClick={handleClickOnOverlay}
        >
            <article
                className='modal__content js-modal__content'
                tabIndex={0}
                ref={buttonRef}
            >
                <div className='book__info'>
                    <h2>Title: {book?.book_title}</h2>
                    <p>Author: {book?.book_author}</p>
                    <p>Publication city: {book?.book_publication_city}</p>
                    <p>Publication country: {book?.book_publication_country}</p>
                    <p>Publication year: {book?.book_publication_year}</p>
                </div>
                <button
                    aria-label='Close popup'
                    onClick={handleClose}
                    className='modal__close'
                >
                    &#10005;
                </button>
            </article>
        </div>
    );
};

export default Modal;
