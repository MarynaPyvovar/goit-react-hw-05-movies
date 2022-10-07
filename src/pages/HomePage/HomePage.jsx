import React, {useState, useEffect} from 'react';
import { fetchTrendingData } from 'API/API';

import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { PageWrapper, MainTitle, ErrorText } from './HomePageStyled';

export const HomePage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)

            try {
                const data = await fetchTrendingData()

                setItems([...data])

            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchMovies();
    }, [])

    const isData = items.length !== 0;

    return (<PageWrapper>
        {!error && <MainTitle>Trending today</MainTitle>}
        {loading && <Loader />}
        {error && <ErrorText>Oops! Something went wrong :( Please, reload page and try again</ErrorText>}
        {isData && <MoviesList items={items} />}
    </PageWrapper>
    )
}
