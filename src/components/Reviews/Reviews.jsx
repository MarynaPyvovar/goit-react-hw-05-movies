import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'API/API';

import { ReviewsList, AuthorName } from './ReviewsStyled';

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

    return (<ReviewsList>
        {isData && <p>We don't have any reviews for this movie :(</p>}
        {reviews?.map(({id, author, content}) => <li key={id}>
            <AuthorName>Author: {author}</AuthorName>
            <p>{content}</p>
            </li>
        )}
    </ReviewsList>
    )
}

export default Reviews