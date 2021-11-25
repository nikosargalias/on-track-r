import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { SearchContextProvider } from './Context/SearchContext';

// styles
import './Styles/main.scss';

function App() {
    return (
        <div>
            <SearchContextProvider>
                <HomePage />
            </SearchContextProvider>
        </div>
    );
}

export default App;
