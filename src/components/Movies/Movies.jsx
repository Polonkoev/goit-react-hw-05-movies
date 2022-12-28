import { Outlet, useParams } from 'react-router-dom';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';

export const Movies = () => {
  const { movieID } = useParams();

  return (
    <>
      {movieID === undefined && <SearchMovies />}

      <Outlet />
    </>
  );
};
