import { Routes, Route, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HomePage } from '../pages/HomePage/HomePage';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <div>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />}>
          {/* <Route path='/movie/:movieId'></Route> */}
        </Route> 
        <Route path='/movies' element={<MoviesPage />}>
          {/* <Route path='/movie/:movieId'></Route> */}
        </Route> 
      </Routes>
      <ToastContainer autoClose={2000}/>
    </div>
  );
};