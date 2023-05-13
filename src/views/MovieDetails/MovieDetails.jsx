import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from '../../servicesApi/ApiMovies';


const MovieDetails = () => {
  const { movieId } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  const getYear = releaseDate => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };

  const getGenres = arrGenres => {
    return arrGenres.map(genre => genre.name).join(', ');
  };

  const location = useLocation();

  const cameBack = location.state?.from ?? '/';
 return (
    <>
      <Link  to={cameBack}>
        Go Back
      </Link>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <div >
            {data.poster_path ? (
              <img

                alt={data.original_title}
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              />
            ) : (
             <p> Sorry </p>
            )}

            <div >
              <h1>
                {data.original_title} ({getYear(data.release_date)})
              </h1>
              <p >
                User Score: {~~(data.vote_average * 10)}%
              </p>
              <p >Overview</p>
              <p>{data.overview}</p>
              <p >Genres</p>
              <p>{getGenres(data.genres)}</p>
            </div>
          </div>
          <div>
            <ul >
              <li>
                <Link to="cast" state={{ from: cameBack }}>
                  <button >Cast</button>
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: cameBack }}>
                  <button >Reviews</button>
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;


/*import React, { useState, useEffect } from 'react';
import { getMovieDetails } from 'servicesApi/ApiMovies';
import { useParams, NavLink } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams(); // obtener el parámetro de la URL correspondiente al ID de la película
  const [movie, setMovie] = useState(null); // estado para almacenar la información de la película

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieData = await getMovieDetails(movieId); // obtener la información detallada de la película a través del endpoint getMovieDetails
      setMovie(movieData); // actualizar el estado con la información de la película
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.title}
      />
      <ul>
        {movie.genres &&
          movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
      </ul>

      <div>
        <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
      </div>

    </div>

  );
};



export default MovieDetails;*/

