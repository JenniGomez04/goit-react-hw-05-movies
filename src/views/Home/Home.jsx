import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from 'servicesApi/ApiMovies';
import { Link } from 'react-router-dom';
import {ContenedorHome} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  // Fn UseEffect se ejecuta una sola vez

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTrendingMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  //Lista de peliculas populares que recorre el map y renderiza cada una

  return (
    <ContenedorHome>
      <h1> Trending Today </h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </ContenedorHome>
  );
};

export default Home;
