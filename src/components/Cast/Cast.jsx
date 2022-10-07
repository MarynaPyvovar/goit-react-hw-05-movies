import React from 'react';
// import PropTypes from 'prop-types';

export const Cast = (data) => {
    return (<ul>
        {data.map(({id, title, name}) => <li key={id}>
            <img src={'photo'} alt='Actor' />
            <p>Name</p>
            <p>Character: {'character'}</p>
            </li>
        )}
    </ul>
    )
}

// Cast.PropTypes = {
//     data: PropTypes.object.isRequired,
// }