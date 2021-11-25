import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './Modal';

it('renders correctly', () => {
    const Movie = {
        Title: 'string',
        Year: 'string',
        imdbID: 'string',
        Type: 'string',
        Poster: 'string',
    };
    const handleClose = () => {};
    const tree = renderer
        .create(<Modal movie={Movie} handleClose={handleClose} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
