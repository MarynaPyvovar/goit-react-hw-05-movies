import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MoviesList = ({items}) => {
    return <ul>
    {items.map(({id, title, name}) => <li key={id}>
            <Link to={id}>{title || name}</Link>
        </li>
    )}
</ul>}

MoviesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired),
}