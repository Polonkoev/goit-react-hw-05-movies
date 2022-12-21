import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findMovieById } from '../components/FetchAPI/FetchAPI';

export const SubPage = () => {
  const [event, setEvent] = useState(null);
  
  const { movieID } = useParams();

  useEffect(() => {
    findMovieById(movieID).then(setEvent);
    
  }, [movieID]);

//   const {original_title, overview, genres, poster_path} = event

  return (
    
    <>
    
    {event !== null && 
     
      <>
      <img src={`https://image.tmdb.org/t/p/w500${event.poster_path}`} alt="" />
      <h2>{event.original_title}</h2>
      <h3>Overview:</h3>
      <p>{event.overview}</p>
      <h3>Genres:</h3>
      <ul>
        {event.genres.map(({id, name})=>(
            <li key={id}>{name}</li>
        ))}
      </ul>
      </>
}
    
    
    
    </>
  )
}