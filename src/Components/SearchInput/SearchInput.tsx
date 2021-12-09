import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../Context/SearchContext';
import './SearchInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type searchProps = {
    placeholder?: string;
};

const SearchInput = ({ placeholder }: searchProps) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const { handleSetSearchString } = useContext(SearchContext);

    useEffect(() => {
        handleSetSearchString(searchValue);
    }, [searchValue, handleSetSearchString]);

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className='search'>
            <input
                type='search'
                placeholder={placeholder}
                value={searchValue}
                onChange={handleChangeValue}
                className='search__input'
                aria-label='Search movies here'
            />
            <FontAwesomeIcon icon={faSearch} className='search__icon' />
        </div>
    );
};

export default SearchInput;
