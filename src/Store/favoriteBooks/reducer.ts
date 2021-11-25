import { Reducer } from '@reduxjs/toolkit';
import { loadState } from '../../localStorage/localStorage';
import { FavoriteBooksState, DispatchAction } from './types';

const initialState: FavoriteBooksState = loadState('favoriteBooks') || [];

export const favoriteBooksReducer: Reducer<FavoriteBooksState, DispatchAction> =
    (state = initialState, action: DispatchAction) => {
        switch (action.type) {
            case 'ADD_BOOK':
                return [...state, action.payload];
            case 'REMOVE_BOOK':
                return state.filter((book) => book.id !== action.payload.id);
            default:
                return state;
        }
    };

export default favoriteBooksReducer;
