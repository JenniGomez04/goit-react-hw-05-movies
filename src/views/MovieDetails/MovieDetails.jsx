import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Link } from 'react-router-dom';
import { ContainerMovieDetails, ContainerG, ContainerOne, ContainerTwo,
          ContainerGenres, ContainerInformation } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [activeTab, setActiveTab] = useState('reviews');

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d2c1d24020287e7b546fb1f2d1960a86`);
      const movieData = await response.json();
      setMovie(movieData);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <ContainerMovieDetails>
     <ContainerG>

      <ContainerOne>
      <NavLink to="/"> ↶ Go Back</NavLink>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      </ContainerOne>

      <ContainerTwo>
        <h2>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h2>
          <p>User Score: {movie.vote_average}%</p>
        <div>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
       </div>
       <ContainerGenres>
       <h2>Genres</h2>
        <ul>
          {movie.genres &&
            movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </ContainerGenres>

      </ContainerTwo>
      </ContainerG>

      <ContainerInformation>
          <h2>Additional Information</h2>
          <ul>
          <li>
            <Link
              to={`/movies/${movie.id}/cast`}
              className={activeTab === 'cast' ? 'active' : ''}
              onClick={() => setActiveTab('cast')}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${movie.id}/reviews`}
              className={activeTab === 'reviews' ? 'active' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </ContainerInformation>
    </ContainerMovieDetails>
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

