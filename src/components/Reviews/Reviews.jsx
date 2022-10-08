import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'API/API';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            setError(null)
            setReviews(null)

        try {
            const data = await fetchReviewsById(movieId)

            setReviews(data)

        } catch (error) {
        setError(error)
        }
    }
        fetchMovie();
    }, [movieId])

    const isData = reviews?.length === 0 || error;

    return (<ul>
        {isData && <p>We don't have any reviews for this movie :(</p>}
        {reviews?.map(({id, author, content}) => <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
            </li>
        )}
    </ul>
    )
}

export default Reviews