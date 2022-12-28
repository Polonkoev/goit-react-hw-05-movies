import { findMovieReviews } from 'components/FetchAPI/FetchAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './pages.styled';

const MovieReviews = () => {
  const [review, setReview] = useState([]);

  const { movieID } = useParams();

  useEffect(() => {
    async function getReview() {
      await findMovieReviews(movieID).then(setReview);
    }
    getReview();
  }, [movieID]);

  return (
    <ReviewsList>
      {review.map(({ id, author_details, content }) => {
        return (
          <li key={id}>
            <h3>Author: {author_details.username}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ReviewsList>
  );
};


export default MovieReviews