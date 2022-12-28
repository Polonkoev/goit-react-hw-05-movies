import { useState, useEffect } from 'react';
import { useSearchParams, Outlet, useLocation } from 'react-router-dom';
import { findMovieByName } from '../FetchAPI/FetchAPI';
import { Link } from 'react-router-dom';

export const SearchMovies = () => {
  const [value, setValue] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === '' || query === null) return;
    async function fetchMovie() {
      const response = await findMovieByName(query);
      setValue(response);
    }
    fetchMovie();
  }, [query]);

  const submitHandler = event => {
    event.preventDefault();

    const form = event.target;
    setSearchParams({ query: form.elements.inputValue.value });

    form.reset();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="inputValue"
          placeholder="Enter movie name..."
        />

        <button>Search</button>
      </form>

      {value !== null && (
        <ul>
          {value.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <Outlet />
    </>
  );
};
