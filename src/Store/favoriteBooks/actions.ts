export const addBook = (book: any) => ({ type: 'ADD_BOOK', payload: book });

export const removeBook = (book: any) => ({
    type: 'REMOVE_BOOK',
    payload: book,
});
