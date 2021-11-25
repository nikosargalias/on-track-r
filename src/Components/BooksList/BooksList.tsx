import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import BookCard from '../Card/BookCard';
import Pagination from '../Pagination/Pagination';
import { useSelector } from 'react-redux';
import { addBook, removeBook } from '../../Store/favoriteBooks/actions';
import { BookType } from '../../Shared/Types/BookType';
import { fetchbooks } from '../../Helpers/fetchMovies';
import { SearchContext } from '../../Context/SearchContext';
import Modal from '../Modal/Modal';

import { PAGE_CHANGE } from '../../Shared/Types/PageChange';

// scss
import './BooksList.scss';

const MovieList = () => {
    const [page, setPage] = useState(0);

    const [booksToDisplay, setBooksToDisplay] =
        useState<React.ReactElement[]>();
    const [isLoading, setIsLoading] = useState(true);
    const favoriteBooks = useSelector<{ favoriteBooks: BookType[] }>(
        (state) => {
            return state.favoriteBooks;
        }
    );
    const { searchString } = useContext(SearchContext);
    const [isShowModal, setIsShowModal] = useState(false);
    const [bookModal, setBookModal] = useState<BookType>();
    const [focusOnModalCloseButton, setFocusOnModalCloseButton] =
        useState<HTMLElement>();
    const [isShowFavorites, setIsShowFavorites] = useState(false);
    const [allBooks, setAllBooks] = useState<[]>();

    useEffect(() => {
        fetchbooks()
            .then((books) => {
                setAllBooks(books);
                setIsLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    const toggleModal = (movie: BookType, focusBtnRef: EventTarget) => {
        setIsShowModal(!isShowModal);
        setBookModal(movie);
        setFocusOnModalCloseButton(focusBtnRef as HTMLElement);
    };

    // persist page number through page reload
    useEffect(() => {
        const curUrl = window.location.href;
        const pageString = curUrl.match(/\&page\=[0-9]*/);
        if (pageString && pageString[0].length > 0) {
            const currentPage = pageString[0].match(/[0-9]/);
            if (currentPage && currentPage[0]) {
                setPage(parseInt(currentPage[0]) - 1);
            }
        }
    }, []);

    useEffect(() => {
        const regexPattern = /\&page\=[0-9]*/;
        const curUrl = window.location.href;
        const pageString = curUrl.match(regexPattern);

        let newUrl: string;
        if (pageString && pageString[0]) {
            newUrl = curUrl.replace(/\&page\=[0-9]?/, `&page=${page + 1}`);
        } else {
            newUrl = `${curUrl}&page=${page + 1}`;
        }
        const nextTitle = 'Remembering page pagination';
        const nextState = {
            additionalInformation:
                'Updated the URL with JS to persist page pagination',
        };
        window.history.replaceState(nextState, nextTitle, newUrl);
    }, [page]);

    const createCard = useCallback(
        (book: any, i) => {
            const isFavorite =
                Array.isArray(favoriteBooks) &&
                favoriteBooks.find((b: any) => b.id === book.id);

            return (
                <BookCard
                    book={book}
                    dispatchAction={isFavorite ? removeBook : addBook}
                    isFavorite={isFavorite}
                    key={i}
                    onClick={(focusBtnRef) => toggleModal(book, focusBtnRef)}
                />
            );
        },
        [favoriteBooks]
    );

    const createBookCardsArray = useCallback(
        (books: BookType[]) => {
            const filteredBooks = books.filter((book) => {
                if (
                    book.book_title
                        .toLowerCase()
                        .includes(searchString.toLowerCase())
                ) {
                    return true;
                }
            });
            const startingCard = page * 10;
            const numOfCardsPerPage = startingCard + 10;
            const BookCards = [];
            for (
                let i = startingCard;
                i < numOfCardsPerPage && i < filteredBooks.length;
                i++
            ) {
                const index = i % filteredBooks.length;
                const BookCard = createCard(filteredBooks[index], index);
                BookCards.push(BookCard);
            }
            return BookCards;
        },
        [page, favoriteBooks, isShowFavorites, searchString]
    );

    useEffect(() => {
        if (isShowFavorites) {
            const BookCards = createBookCardsArray(favoriteBooks as BookType[]);
            setBooksToDisplay(BookCards);
        }
    }, [isShowFavorites, page, favoriteBooks, searchString]);

    useEffect(() => {
        if (!isShowFavorites) {
            if (allBooks) {
                const BookCards = createBookCardsArray(allBooks);
                setBooksToDisplay(BookCards);
            } else {
                setAllBooks([]);
            }
        }
    }, [allBooks, favoriteBooks, page, isShowFavorites, searchString]);

    const handleChangePage = useCallback(
        (pagination: PAGE_CHANGE) => {
            let booksList;
            if (!isShowFavorites) {
                booksList = allBooks;
            } else {
                booksList = favoriteBooks as BookType[];
            }
            if (booksList) {
                setPage((prevPage) => {
                    if (prevPage + pagination < 0) {
                        return Math.floor(booksList.length / 10 - 1);
                    } else if (prevPage + pagination >= booksList.length / 10) {
                        return 0;
                    } else {
                        return prevPage + pagination;
                    }
                });
            }
        },
        [allBooks, isShowFavorites]
    );

    const handleToggleShowFavorites = useCallback(() => {
        setIsShowFavorites(!isShowFavorites);
        setPage(0);
    }, [isShowFavorites]);

    const handleCloseModal = useCallback(() => {
        setIsShowModal(false);
    }, []);

    const getNumOfPages = useCallback(() => {
        let bookList;
        if (!isShowFavorites) {
            bookList = allBooks;
        } else {
            bookList = favoriteBooks as BookType[];
        }
        if (bookList) {
            if (bookList.length > 0) {
                return `Page ${Math.ceil(
                    1 + (page % (bookList.length / 10))
                )} of
                ${Math.ceil(bookList.length / 10)}`;
            }
        }
    }, [page, allBooks, favoriteBooks, isShowFavorites]);

    return (
        <div className='book-list'>
            <div className='book-list__results'>
                <p>
                    {allBooks &&
                        allBooks.length &&
                        `${allBooks.length} results found`}
                </p>
                <div className='book-list__pagination'>
                    <button
                        className='book-list__toggle-fav'
                        onClick={handleToggleShowFavorites}
                    >
                        Show Favorite Books
                    </button>
                    <p>{getNumOfPages()}</p>
                    <Pagination handleChange={handleChangePage} />
                </div>
            </div>

            {booksToDisplay && booksToDisplay.length > 0 ? (
                <div className='book-list__movies'>{booksToDisplay}</div>
            ) : (
                <div className='book-list__no-results'>
                    <p>
                        {isLoading
                            ? 'Results are loading...'
                            : 'Sorry, no movies found, please type something in the search box'}
                    </p>
                </div>
            )}

            {isShowModal && bookModal ? (
                <Modal
                    book={bookModal}
                    handleClose={handleCloseModal}
                    focusElem={focusOnModalCloseButton}
                />
            ) : null}
        </div>
    );
};

export default MovieList;
