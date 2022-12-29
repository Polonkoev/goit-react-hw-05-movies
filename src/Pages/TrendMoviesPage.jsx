import { useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import { fetchMovieTrending } from 'components/FetchAPI/FetchAPI';
import { TrandTitle, TrandsList, TrandsListLink} from './pages.styled';

const TrendMoviesPage = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation()
  // console.log(location);
  useEffect(() => {
    fetchMovieTrending().then(setTrending);
  }, []);

  return (<>
    <TrandTitle>Most Popular Movies</TrandTitle>
    <TrandsList>
      {trending.map(({ id, title }) => {
        return (
          
          <li key={id}>
            <TrandsListLink to={`movies/${id}`} state={{ from: location }}>{title}</TrandsListLink>
          </li>
          
        );
      })}
    </TrandsList>
    </>
  );
};

export default TrendMoviesPage