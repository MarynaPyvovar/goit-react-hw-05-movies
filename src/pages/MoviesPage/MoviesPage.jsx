import React, {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import {fetchSearchData} from 'API/API';

import { Searchbar } from 'components/SearchBar/SearchBar';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  
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

      if (!data) {
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
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {error && <p>Oops! Something went wrong :( Please, reload page and try again</p>}
      {isData && <MoviesList items={items} />}
    </div>
  )
}
