import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'API/API';

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            setError(null)
            setReviews(null)

        try {
            const data = await fetchReviewsById(movieId)
            console.log('in reviews', data)

            setReviews(data)

        } catch (error) {
        setError(error)
        }
    }
        fetchMovie();
    }, [movieId])

    return (<ul>
        {error && <p>No info</p>}
        {reviews?.map(({id, author, content}) => <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
            </li>
        )}
    </ul>
    )
}