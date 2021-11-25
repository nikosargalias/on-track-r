export type FavoriteBooksState = object & { id: string }[];
export interface DispatchAction {
    type: 'ADD_BOOK' | 'REMOVE_BOOK';
    payload: object & { id: string };
}
