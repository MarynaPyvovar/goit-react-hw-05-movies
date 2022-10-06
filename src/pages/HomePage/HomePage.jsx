import React, {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import {fetchTrendingData} from 'API/API';
import { Loader } from 'components/Loader/Loader';

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

    return (<>
        <h1>Trending today</h1>
        {loading && <Loader />}
        {error && <p>Oops! Something went wrong :( Please, reload page and try again</p>}
        <Outlet />
        {isData && <MoviesList items={items} />}
    </>
    )
}
