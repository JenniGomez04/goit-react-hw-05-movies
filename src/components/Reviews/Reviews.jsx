import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servicesApi/ApiMovies';

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

  return (
    <div>
      <h2>Críticas</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Autor: {review.author}</p>
          <p>Contenido: {review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
