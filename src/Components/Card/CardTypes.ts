import { BookType } from '../../Shared/Types/BookType';

export type BookCardProps = {
    book: BookType;
    dispatchAction?: (movie: any) => { type: string; payload: any };
    isFavorite: boolean;
    onClick?: (focusElem: EventTarget) => void;
};
