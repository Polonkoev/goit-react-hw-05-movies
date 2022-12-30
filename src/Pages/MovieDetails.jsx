import { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { findMovieById } from '../components/FetchAPI/FetchAPI';
import {
  Title,
  OverviewTitle,
  OverviewDesc,
  Genres,
  List,
  ListItem,
  A,
  Image,
  Button,
} from './pages.styled';

export default function MovieDetails() {
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { movieID } = useParams();

  useEffect(() => {
    findMovieById(movieID).then(setEvent);
  }, [movieID]);

  if (!event) {
    return;
  }

  return (
    <>
      <Button
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </Button>

      <Image
        src={`https://image.tmdb.org/t/p/w300${event.poster_path}`}
        alt=""
      />
      <Title>{event.original_title}</Title>
      <OverviewTitle>Overview:</OverviewTitle>
      <OverviewDesc>{event.overview}</OverviewDesc>
      <Genres>Genres:</Genres>
      <List>
        {event.genres.map(({ id, name }) => (
          <ListItem key={id}>{name}</ListItem>
        ))}
      </List>
      <A to="cast">Cast</A>
      <A to="reviews">Reviews</A>

      <Outlet />
    </>
  );
}
