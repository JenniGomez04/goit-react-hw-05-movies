import React, { useState, useEffect } from 'react';
import { getMovieDetails } from 'servicesApi/ApiMovies';
import { useParams } from 'react-router-dom';

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
      <ul>
        {movie.genres &&
          movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
      </ul>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieDetails;







/*import React, { useState, useEffect } from 'react';
import { getMovieById } from 'servicesApi/ApiMovies';

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
  );
};

export default MovieDetails;*/










