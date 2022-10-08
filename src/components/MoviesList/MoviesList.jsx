import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieLinks, MovieLink } from './MoviesListStyled';

export const MoviesList = ({ items }) => {
    const location = useLocation();

    return <MovieLinks>
        {items?.map(({id, title, name}) => <li key={id}>
                <MovieLink to={`/movies/${id}`} state={{from: location}}>{title || name}</MovieLink>
            </li>
        )}
    </MovieLinks>
}

MoviesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired),
}