import React, { useState, useEffect } from 'react';
import { fetchTrendingData } from 'API/API';

import { MoviesList } from 'components/MoviesList/MoviesList';

import { PageWrapper, MainTitle, ErrorText } from './HomePageStyled';

const HomePage = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await fetchTrendingData()

                setItems([...data])

            } catch (error) {
                setError(error)
            }
        }
        fetchMovies();
    }, [])

    const isData = items.length !== 0;

    return (<PageWrapper>
        {!error && <MainTitle>Trending today</MainTitle>}
        {error && <ErrorText>Oops! Something went wrong :( Please, reload page and try again</ErrorText>}
        {isData && <MoviesList items={items} />}
    </PageWrapper>
    )
}

export default HomePage