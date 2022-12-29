// import TrendMoviesPage from 'Pages/TrendMoviesPage';
import React, { lazy } from 'react';
const TrendMoviesPage = lazy(() => import('Pages/TrendMoviesPage'));
export const Home = () => {
  return (
    <>
      <TrendMoviesPage />
    </>
  );
};
