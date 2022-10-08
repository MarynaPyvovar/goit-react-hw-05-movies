import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from 'API/API';

const Cast = () => {
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

    const isData = cast?.length === 0 || error;

    return (<ul>
        {isData && <p>No info for now, we'll add it later!</p>}
        {cast?.map(({id, profile_path, character, name}) => <li key={id/* + Date.now()*/}>
            <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt='Actor' />
            <p>{name}</p>
            <p>Character: {character}</p>
            </li>
        )}
    </ul>
    )
}

export default Cast