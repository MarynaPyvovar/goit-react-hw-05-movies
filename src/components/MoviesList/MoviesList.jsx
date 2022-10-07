import React from 'react';
import PropTypes from 'prop-types';
import { MovieLinks, MovieLink } from './MoviesListStyled';

export const MoviesList = ({ items }) => {
    return <MovieLinks>
        {items?.map(({id, title, name}) => <li key={id}>
                <MovieLink to={`${id}`}>{title || name}</MovieLink>
            </li>
        )}
    </MovieLinks>
}

MoviesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired),
}