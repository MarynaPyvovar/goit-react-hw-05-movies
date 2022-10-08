import React, { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { Loader } from "components/Loader/Loader";
import { fetchDataById } from 'API/API';

import { FilmInformation, FilmPoster, Info, FilmTitle, FilmSubtitle, DetailsList, DatailsLink } from './MovieDetailsStyled';
import { ErrorText } from '../HomePage/HomePageStyled'; 

const MovieDetails = () => {
    const { movieId } = useParams();
    const [state, setState] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchMovie = async () => {
            setError(null)
            setState(null)

        try {
            const data = await fetchDataById(movieId)

            setState(data)

        } catch (error) {
            setError(error)
        }
    }
        fetchMovie();
    }, [movieId])

    if (!state) return null
    
    const { poster_path, title, vote_average, overview, genres } = state;
    const isData = error || !state;

    return (<>
        {isData && <ErrorText>Oops! Something went wrong :( Please, choose another movie</ErrorText>}
        <Link to={location.state?.from ?? '/'}>Go back</Link>
        <FilmInformation>
            <FilmPoster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Film poster" />
            <Info>
                <FilmTitle>{title}</FilmTitle>
                    <p>User score: {vote_average}</p>
                <FilmSubtitle>Overwiev</FilmSubtitle>
                    <p>{overview}</p>
                <FilmSubtitle>Genres</FilmSubtitle>
                    <p>{genres.map(({name}) => `${name} `)}</p>
            </Info>
        </FilmInformation>
        <h3>Additional information</h3>
        <DetailsList>
            <DatailsLink to="cast">Cast</DatailsLink>
            <DatailsLink to="reviews">Rewievs</DatailsLink>
        </DetailsList>
        <Suspense  fallback={<Loader />}>
            <Outlet />
        </Suspense>
        
    </>
    )
}

export default MovieDetails