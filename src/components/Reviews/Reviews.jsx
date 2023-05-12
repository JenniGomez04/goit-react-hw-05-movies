import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servicesApi/ApiMovies';
import {MessageReviews, ContainerReviews } from './Reviews.styled';


const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const movieReviews = await getMovieReviews(movieId);
      setReviews(movieReviews);
    };
    fetchMovieReviews();
  }, [movieId]);

  if (!reviews) {
    return <div>Loading...</div>;
  }

  if (reviews.length === 0) {
    return <MessageReviews >We don't have any reviews for this movie.</MessageReviews >;
  }

  return (
    <ContainerReviews>
      {reviews.map((review) => (
        <div key={review.id}>
          <h3>Autor: {review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </ContainerReviews>
  );
};


Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
