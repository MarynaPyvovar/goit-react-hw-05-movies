import React, { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import { Loader } from "components/Loader/Loader";
import { fetchDataById } from 'API/API';

import { DetailsWrapper, FilmInformation, FilmPoster, Info, FilmTitle, FilmSubtitle, DetailsList, DetailsLink, BackLink } from './MovieDetailsStyled';
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
    const backLink = location.state?.from ?? '/movies';

    return (<DetailsWrapper>
        {isData && <ErrorText>Oops! Something went wrong :( Please, choose another movie</ErrorText>}
        <BackLink to={backLink}>Go back</BackLink>
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
            <DetailsLink to="cast" state={{from: backLink}}>Cast</DetailsLink>
            <DetailsLink to="reviews" state={{from: backLink}}>Rewievs</DetailsLink>
        </DetailsList>
        <Suspense  fallback={<Loader />}>
            <Outlet />
        </Suspense>
        
    </DetailsWrapper>
    )
}

export default MovieDetails