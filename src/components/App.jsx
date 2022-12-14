import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Layout } from './Layout/Layout';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'))
const MovieDetails = lazy(() => import('../pages/MovieDatails/MovieDetails'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'))
const PageNotFound = lazy(() => import('./PageNotFound/PageNotFound'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<HomePage />} />
          
          <Route path='movies' element={<MoviesPage />} />
          
          <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
          
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000}/>
    </>
  );
};