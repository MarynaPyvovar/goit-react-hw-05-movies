import React from 'react';
// import PropTypes from 'prop-types';

export const Reviews = (data) => {
    return (<ul>
        {data.map(({id, author, review}) => <li key={id}>
            <p>Author: {'name'}</p>
            <p>{'review'}</p>
            </li>
        )}
    </ul>
    )
}

// Reviews.PropTypes = {
//     data: PropTypes.object.isRequired,
// }