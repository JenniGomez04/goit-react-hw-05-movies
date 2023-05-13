import axios from 'axios';

// FUNCIÓN CREA INSTANCIA CON DATOS BASICOS DE LA API PARA LAS CONSULTAS
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd2c1d24020287e7b546fb1f2d1960a86',
    language: 'en-US',
  },
});

// FUNCIÓN TRAE INFORMACIÓN DE LAS PELICULAS POPULARES DEL MOMENTO
export async function getTrendingMovies() {
  const query = `/trending/movie/week`;
  try {
    const { data } = await instance.get(query);
    return data.results;
  } catch (error) {
    throw error;
  }
}

// FUNCIÓN TRAE INFORMACIÓN DE DETALLES DE LA PELICULA
export async function getMovieDetails(id) {
  const query = `/movie/${id}`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

// FUNCIÓN TRAE INFORMACIÓN DE LOS ACTORES
export async function getMovieCredits(id) {
  const query = `/movie/${id}/credits`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

// FUNCIÓN TRAE INFORMACIÓN DE RESEÑAS DE LAS PELICULAS
export async function getMovieReviews(id) {
  const query = `/movie/${id}/reviews`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

// FUNCIÓN TRAE INFORMACIÓN DE BUSQUEDA DE USUARIOS
export async function searchMovies(queryString) {
  const query = `/search/movie?query=${queryString}`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}
