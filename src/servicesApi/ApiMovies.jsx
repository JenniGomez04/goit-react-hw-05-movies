import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd2c1d24020287e7b546fb1f2d1960a86',
    language: 'en-US',
  },
});

export async function getTrendingMovies() {
  const query = `/trending/movie/week`;
  try {
    const { data } = await instance.get(query);
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function getMovieDetails(id) {
  const query = `/movie/${id}`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMovieCredits(id) {
  const query = `/movie/${id}/credits`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMovieReviews(id) {
  const query = `/movie/${id}/reviews`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function searchMovies(queryString) {
  const query = `/search/movie?query=${queryString}`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}
