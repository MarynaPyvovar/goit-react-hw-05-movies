import React from 'react';
import PropTypes from 'prop-types';
import { MovieLinks, MovieLink } from './MoviesListStyled';

export const MoviesList = ({ items, state }) => {
    return <MovieLinks>
        {items?.map(({id, title, name}) => <li key={id}>
                <MovieLink to={`${id}`} state={state}>{title || name}</MovieLink>
            </li>
        )}
    </MovieLinks>
}

MoviesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired),
    state: PropTypes.object.isRequired,
}