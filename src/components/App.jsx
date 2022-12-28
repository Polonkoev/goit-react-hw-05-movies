import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { Movies } from './Movies/Movies';

import React, { lazy } from 'react';

const MovieDetails = lazy(() => import('Pages/MovieDetails'));
const MovieCredits = lazy(() => import('Pages/MovieCredits'));
const MovieReviews = lazy(() => import('Pages/MovieReviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />}>
          <Route path=":movieID" element={<MovieDetails />}>
            <Route path="/movies/:movieID/cast" element={<MovieCredits />} />
            <Route path="/movies/:movieID/reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
