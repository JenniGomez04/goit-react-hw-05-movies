import axios from 'axios';

//const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ea073995e4db72262db9a5039068ed8d';


//LISTA DE PELICULAS POPULARES
export const getTrendingMovies = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
  return response.data.results;
};

// Resultado de busqueda que coincide con el query
export const searchMovies = async (query) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
  console.log(response.data.results);
  return response.data.results;
};

// Detalles de la pelicula, fecha de lanzamiento, titulo, sipnosis, genero etc.
export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

// Información sobre los actores de la pelicula buscada
export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data.cast;
};

// Información de criticas y fecha en la que se publico
export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data.results;
};



