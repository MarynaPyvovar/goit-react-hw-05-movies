import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from 'API/API';

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            setError(null)
            setCast(null)

        try {
            const data = await fetchCastById(movieId)

            setCast(data)

        } catch (error) {
        setError(error)
        }
    }
        fetchMovie();
    }, [movieId])

    return (<ul>
        {error && <p>No info</p>}
        {cast?.map(({id, profile_path, character, name}) => <li key={id}>
            <img src={profile_path} alt='Actor' />
            <p>{name}</p>
            <p>Character: {character}</p>
            </li>
        )}
    </ul>
    )
}