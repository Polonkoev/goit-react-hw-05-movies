import React, { lazy } from 'react';
const TrendMoviesPage = lazy(() => import('Pages/TrendMoviesPage'));
export default function Home() {
  return (
    <>
      <TrendMoviesPage />
    </>
  );
}
