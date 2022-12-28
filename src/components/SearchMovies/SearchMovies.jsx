import { useState, useEffect } from 'react';
import { useSearchParams, Outlet, useLocation } from 'react-router-dom';
import { findMovieByName } from '../FetchAPI/FetchAPI';

import { SearchList, SearchListLink, Form, Button} from './SearchMovies.styled';

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
      <Form onSubmit={submitHandler}>
        <input
          type="text"
          name="inputValue"
          placeholder="Enter movie name..."
        />

        <Button>Search</Button>
      </Form>

      {value !== null && (
        <SearchList>
          {value.map(({ id, title }) => {
            return (
              <li key={id}>
                <SearchListLink to={`${id}`} state={{ from: location }}>
                  {title}
                </SearchListLink>
              </li>
            );
          })}
        </SearchList>
      )}
      <Outlet />
    </>
  );
};
