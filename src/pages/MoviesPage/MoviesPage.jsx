import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {fetchSearchData} from 'API/API';

import { Searchbar } from 'components/SearchBar/SearchBar';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { PageWrapper, ErrorText } from '../HomePage/HomePageStyled';


export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const queryParam = searchParams.get('query') ?? '';

  const changeQuery = value => {
    setSearchParams(value !== '' ? {query: value } : {})
  }

  useEffect(() => {
    if (queryParam === '') {
      return
    }

  const fetchMovies = async () => {
    setLoading(true)

    try {
      const data = await fetchSearchData(queryParam)

      if (data.length === 0) {
        setMovies([])
        return toast(`Sorry, we hadn't found movies for "${queryParam}", please, enter another query :)`)
      }

      setMovies([...data])

    } catch (error) {
      setError(error)
    }
    finally {
      setLoading(false)
    }
  }
    fetchMovies();
  }, [queryParam])

  const isData = movies.length > 0;

  return (
    <PageWrapper>
      <Searchbar onSubmit={changeQuery} value={queryParam} />
      {loading && <Loader />}
      {error && <ErrorText>Oops! Something went wrong :( Please, reload page and try again</ErrorText>}
      {isData && <MoviesList items={movies} />}
    </PageWrapper>
  )
}
