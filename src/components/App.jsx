import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { Movies } from './Movies/Movies';
import MovieDetails from 'Pages/MovieDetails'
import MovieCredits from 'Pages/MovieCredits'
import MovieReviews from 'Pages/MovieReviews'

// import React, { lazy } from 'react';

// const MovieDetails = lazy(() => import('Pages/MovieDetails'));
// const MovieCredits = lazy(() => import('Pages/MovieCredits'));
// const MovieReviews = lazy(() => import('Pages/MovieReviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieID" element={<MovieDetails />}>
          <Route path="reviews" element={<MovieReviews />} />
          <Route path="cast" element={<MovieCredits />} />
        </Route>
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
