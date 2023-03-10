import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('Pages/Details/MovieDetails'));
const MovieCredits = lazy(() => import('Pages/Cast/MovieCredits'));
const MovieReviews = lazy(() => import('Pages/Reviews/MovieReviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieID"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route
            path="reviews"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieReviews />
              </Suspense>
            }
          />
          <Route
            path="cast"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieCredits />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
