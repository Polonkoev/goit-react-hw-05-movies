import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { findMovieById } from '../components/FetchAPI/FetchAPI';
import { MovieCredits } from './MovieCredits';

export const MovieDetails = () => {
  const [event, setEvent] = useState(null);
  
  const { movieID } = useParams();

  useEffect(() => {
    findMovieById(movieID).then(setEvent);
    
  }, [movieID]);



  return (
    
    <>
    
    {event !== null && 
     
      <>
      <button>Go back</button>
      <img src={`https://image.tmdb.org/t/p/w300${event.poster_path}`} alt="" />
      <h2>{event.original_title}</h2>
      <h3>Overview:</h3>
      <p>{event.overview}</p>
      <h3>Genres:</h3>
      <ul>
        {event.genres.map(({id, name})=>(
            <li key={id}>{name}</li>
        ))}
      </ul>

      <Link to='cast'>Cast</Link>
      <Outlet/>
      
      </>
}
    

    
    </>
  )
}