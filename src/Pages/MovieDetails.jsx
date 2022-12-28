import { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { findMovieById } from '../components/FetchAPI/FetchAPI';
import { Title, OverviewTitle, OverviewDesc, Genres, List, ListItem, A, Image, Button} from './pages.styled';
import { Suspense } from 'react';


  const MovieDetails = () => {
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { movieID } = useParams();

  useEffect(() => {
    findMovieById(movieID).then(setEvent);
    
  }, [movieID]);



  return (
    
    <>
    
    {event !== null && 
     
      <>
      <Button onClick={() => {
              navigate(location?.state?.from ?? '/');
            }}>Go back</Button>
      <Image src={`https://image.tmdb.org/t/p/w300${event.poster_path}`} alt="" />
      <Title>{event.original_title}</Title>
      <OverviewTitle>Overview:</OverviewTitle>
      <OverviewDesc>{event.overview}</OverviewDesc>
      <Genres>Genres:</Genres>
      <List>
        {event.genres.map(({id, name})=>(
            <ListItem key={id}>{name}</ListItem>
        ))}
      </List>

      <A to='cast' >Cast</A>
      <A to='reviews'>Reviews</A>
      <Suspense fallback={<h3>Loading...</h3>}>
      <Outlet/>
      </Suspense>
      </>
}
    

    
    </>
  )
}
export default MovieDetails