import axios from 'axios';

const API_KEY = '894a5fcb5eb3af426933275e70f0cd83';

export async function fetchMovieTrending() {
  const response = await axios(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
}

export async function findMovieByName(keyword) {
  const response = await axios(`https://api.themoviedb.org/3/search/movie?`, {
    params: {
      api_key: API_KEY,
      query: keyword,
      include_adult: false,
    },
  });
  return response.data.results;
}

export async function findMovieById(movie_id) {
  const response = await axios(
    `https://api.themoviedb.org/3/movie/${movie_id}`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data;
}

export async function findMovieCredits(movie_id) {
  const response = await axios(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.cast;
}
export async function findMovieReviews(movie_id) {
  const response = await axios(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
}
