import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servicesApi/ApiMovies';
import { Ul, Li } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const {cast}= await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.error('Something went wrong with fetching cast on movie page', error);
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
        <Ul>
          {cast.map(({ id, name, character, profile_path }) => {
            let profileImg = `https://image.tmdb.org/t/p/w500${profile_path}`;

            if (!profile_path) {
              profileImg =
                'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/128px/2753.png';
              name = `${name} (No Image Available)`;
            }

            return (
              <Li key={id}>
                <img src={profileImg} alt={name} />
                <div>
                  <h3>{name}</h3>
                  <p>Character: {character}</p>
                </div>
              </Li>
            );
          })}
        </Ul>
      ) : (
        <p>There is no information about actors for this movie.</p>
      )}

      {error && (
        <div>
          <h2>Please try again later.</h2>
        </div>
      )}
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
}

export default Cast;
