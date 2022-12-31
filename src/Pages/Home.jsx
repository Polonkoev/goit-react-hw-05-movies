import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieTrending } from 'components/FetchAPI/FetchAPI';
import { TrandTitle, TrandsList, TrandsListLink } from '../Pages/pages.styled';

export default function Home() {
 const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovieTrending().then(setTrending);
  }, []);



  return (
    <>
      <TrandTitle>Most Popular Movies</TrandTitle>
      <TrandsList>
        {trending.map(({ id, title }) => {
          return (
            <li key={id}>
              <TrandsListLink to={`movies/${id}`} state={{ from: location }}>
                {title}
              </TrandsListLink>
            </li>
          );
        })}
      </TrandsList>
    </>
  );
}
