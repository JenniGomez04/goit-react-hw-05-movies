import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from '../../servicesApi/ApiMovies';
import { GoBack, ContainerMovieDetails, ContainerDetails, ContainerInformation } from './MovieDetails.styled';


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
    <GoBack>
      <Link  to={cameBack} className="go-back-link">
      ↶ Go Back
      </Link>
      </GoBack>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <ContainerMovieDetails >
            {data.poster_path ? (
              <img

                alt={data.original_title}
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              />
            ) : (
             <p> Sorry </p>
            )}

            <ContainerDetails >
              <h1>
                {data.original_title} ({getYear(data.release_date)})
              </h1>
              <p >
                User Score: {~~(data.vote_average * 10)}%
              </p>
              <h3>Overview</h3>
              <p>{data.overview}</p>
              <h3>Genres</h3>
              <p>{getGenres(data.genres)}</p>
            </ContainerDetails>
          </ContainerMovieDetails>
          <ContainerInformation>
            <ul >
              <li>
                <Link to="cast" state={{ from: cameBack }}>
                 Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: cameBack }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </ContainerInformation>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
