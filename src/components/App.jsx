import axios from "axios";
import {Routes, Route} from 'react-router-dom'
import { Home } from "./Home/Home";

import { Layout } from "./Layout/Layout";
import {Movies} from './Movies/Movies'
import { SearchMovies } from "./SearchMovies/SearchMovies";
import { SubPage } from "Pages/SubPage";
import {MovieDetails} from './MovieDetails/MovieDetails'
import {TrendMoviesPage} from '../Pages/TrendMoviesPage'

export const App = () => {




// async function fetchMovie(){
//   axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
// }





  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}>
          <Route path=":movieID" element={<SubPage/>}/>
        </Route>


        <Route path="*" element={<Home/>}/>
      </Route>
    </Routes>
  )
  
};
