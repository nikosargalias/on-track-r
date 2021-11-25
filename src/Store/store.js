import { configureStore, Reducer } from '@reduxjs/toolkit';
import { stringify } from 'querystring';
import favoriteBooksReducer from './favoriteBooks/reducer';
import { saveToLocalStorage } from '../localStorage/localStorage';

const store = configureStore({
    reducer: {
        favoriteBooks: favoriteBooksReducer,
    },
});

store.subscribe(() => {
    saveToLocalStorage('favoriteBooks', store.getState().favoriteBooks);
});

export default store;
