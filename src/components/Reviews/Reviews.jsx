import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servicesApi/ApiMovies';
import { ContainerReviews } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchMovieReviews = async () => {
      const movieReviews = await getMovieReviews(movieId);
      setReviews(movieReviews);
    };
    fetchMovieReviews();
  }, [movieId]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);


  return (
    <>
      {loading ? (
        'Loading...'
      ) : reviews && reviews.length > 0 ? (
    <ContainerReviews>

      {reviews.map(({id,author,content}) => (
        <div key={id}>
          <h3>Autor: {author}</h3>
          <p>{content}</p>
        </div>
      ))}
    </ContainerReviews>
     ) : (
        <p >No reviews found</p>
      )}
    </>
  );
};


Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;
