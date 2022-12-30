import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findMovieCredits } from 'components/FetchAPI/FetchAPI';
import {CastList} from './pages.styled';


export default function MovieCredits(){
  const [cast, setCast] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    async function getCredits() {
      await findMovieCredits(movieID).then(setCast);
    }
    getCredits();
  }, [movieID]);

  return (
    <>

      <CastList>
        {cast.map(({ id, name, character, profile_path }) => {
          return (
            
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt=""
                />
                <h3>{name}</h3>
                <p>{character}</p>
              </li>
           
          );
        })}
      </CastList>
     
    </>
  );
};

// export default MovieCredits