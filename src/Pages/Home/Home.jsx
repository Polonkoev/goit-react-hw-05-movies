import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieTrending } from 'components/FetchAPI/FetchAPI';
// import { TrandTitle, TrandsList, TrandsListLink, ListItem } from '../pages.styled';
import { Link } from 'react-router-dom';
import css from '../Home/home.module.css'

export default function Home() {
 const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovieTrending().then(setTrending);
  }, []);

  return (
    <>

      <h2 className={css.Title}>Most Popular Movies Today</h2>
      <ul className={css.List}>
        {trending.map(({ id, title, backdrop_path, poster_path
 }) => {
          return (
            <li key={id} className={css.ListItem}>

            <div className={css.ListItemWrapper}>
                <Link to={`movies/${id}`} state={{ from: location }} className={css.Link}>
                <img className={css.Image}
          src={`https://image.tmdb.org/t/p/w500${poster_path
        }`}
          alt=""
        />
                  {title}
                </Link>
            </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

