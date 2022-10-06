import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const FilmInfo = (data) => {
    return (<div>
        <img src="" alt="" />
        <h1></h1>
        <p>User score: { }</p>
        <h2>Overwiev</h2>
        <p>{ }</p>
        <h2>Genres</h2>
        <p>{ }</p>
        <h3>Additional information</h3>
        <Link to="">Cast</Link>
        <Link to="">Rewievs</Link>
    </div>
    )
}

FilmInfo.PropTypes = {
    data: PropTypes.object.isRequired,
}