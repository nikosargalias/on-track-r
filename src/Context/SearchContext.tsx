import React, { createContext, useState } from 'react';

type SearchContextValue = {
    searchString: string;
    handleSetSearchString: (string: string) => void;
};

export const SearchContext = createContext<SearchContextValue>(
    {} as SearchContextValue
);

export const SearchContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [searchString, setSearchString] = useState('');

    const handleSetSearchString = (string: string) => {
        setSearchString(string);
    };
    return (
        <SearchContext.Provider value={{ searchString, handleSetSearchString }}>
            {children}
        </SearchContext.Provider>
    );
};
