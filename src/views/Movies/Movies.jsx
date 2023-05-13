//import PropTypes from 'prop-types';

import { searchMovies } from 'servicesApi/ApiMovies';
//import { ContainerInput } from './Movies.styled';

import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const [query, setQuery] = useState(() => searchQuery || '');

  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { results } = await searchMovies(searchQuery);
        setData(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (searchQuery) {
      getData();
    }
  }, [searchQuery]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: query });
  };

  return (
    <>
      <div >
        <h2 >Search movies:</h2>

        <form onSubmit={handleSubmit} >
          <input
            value={query}
            onChange={handleChange}
            name="search"
            type="text"
            placeholder="Type here"

          />
          <button type="submit">
            Search
          </button>
        </form>
      </div>
      <ul>
        {searchQuery ? (
          loading ? (
            'Loading...'
          ) : data.length > 0 ? (
            data.map(({ title, id }) => (
              <li key={id} >
                <Link state={{ from: location }} to={`/movies/${id}`}>
                  {title}
                </Link>
              </li>
            ))
          ) : (
            <p>
              No movies with this title were found. Try entering another title
            </p>
          )
        ) : (
          <p ></p>
        )}
      </ul>
    </>
  );
};

export default Movies;
