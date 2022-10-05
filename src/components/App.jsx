import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/movies'>Movies</Link>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
      </Routes>
    </div>
  );
};

// const API_KEY = '1cf55529396093bd7165d94d7485d292';
// const BASE_URL = 'https://api.themoviedb.org/';

// https://api.themoviedb.org/3/movie/550?api_key=1cf55529396093bd7165d94d7485d292   example of api-fetch