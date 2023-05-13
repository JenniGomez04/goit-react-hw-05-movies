
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servicesApi/ApiMovies';
import { ContainerReviews } from './Reviews.styled';


const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchMovieReviews = async () => {
      const movieReviews = await getMovieReviews(id);
      setReviews(movieReviews);
    };
    fetchMovieReviews();
  }, [id]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(id);
        setReviews(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);


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


export default Reviews;

