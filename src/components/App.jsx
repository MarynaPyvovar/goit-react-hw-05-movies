import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage';
import { FilmInfo } from './FilmInfo/FilmInfo';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />} />

          <Route path=':movieId' element={<FilmInfo />}>
            <Route path='cast' element={<Cast />}></Route>
            <Route path='reviews' element={<Reviews />}></Route>
          </Route>
          
          
        </Route> 
      </Routes>
      <ToastContainer autoClose={2000}/>
    </>
  );
};