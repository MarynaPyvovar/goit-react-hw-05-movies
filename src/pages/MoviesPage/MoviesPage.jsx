import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {fetchSearchData} from 'API/API';

import { Searchbar } from 'components/SearchBar/SearchBar';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { PageWrapper, ErrorText } from '../HomePage/HomePageStyled';

export const MoviesPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
const handleFormSubmit = input => {
  if (input !== searchInput) {
    setSearchInput(input)
  }
}

  useEffect(() => {
    if (searchInput === '') {
      return
    }

  const fetchMovies = async () => {
    setLoading(true)

    try {
      const data = await fetchSearchData(searchInput)

      if (data.length === 0) {
          return toast(`Sorry, we hadn't found images for "${searchInput}", please, enter another query :)`)
      }

      setItems([...data])

    } catch (error) {
      setError(error)
    }
    finally {
      setLoading(false)
    }
  }
    fetchMovies();
  }, [searchInput])

  const isData = items.length > 0;

  return (
    <PageWrapper>
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {error && <ErrorText>Oops! Something went wrong :( Please, reload page and try again</ErrorText>}
      {isData && <MoviesList items={items} />}
    </PageWrapper>
  )
}
