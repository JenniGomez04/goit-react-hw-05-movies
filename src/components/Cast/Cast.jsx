import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails  } from 'servicesApi/ApiMovies';


const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(movieId);
      setCast(movieDetails.credits.cast);
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!cast) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Reparto:</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name} ({actor.character})</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;



/*const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const res = await getMovieDetails(movieId);
        setCast(res);
      } catch (error) {
        console.error('Smth wrong with fetch cast on movie page', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <div>
      {loading && 'Loading...'}

      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => {
            let profileImg = `https://image.tmdb.org/t/p/w500${profile_path}`;

            if (!profile_path) {
              profileImg =
                'https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg';
            }
            return (
              <li key={id}>
                <img src={profileImg} alt={name} />
                <div>
                  <p>Name: {name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is no information about actors for this movie.</p>
      )}

      {error && (
        <div>
          <h2>
            The service is temporarily unavailable. Please try again later.
          </h2>
        </div>
      )}
    </div>
  );
};
export default Cast;*/
