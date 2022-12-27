import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieTrending } from 'components/FetchAPI/FetchAPI';

export const TrendMoviesPage = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetchMovieTrending().then(setTrending);
  }, []);

  return (<>
    <h2>Most Popular Movies</h2>
    <ul>
      {trending.map(({ id, title }) => {
        return (
          
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
          
        );
      })}
    </ul>
    </>
  );
};
