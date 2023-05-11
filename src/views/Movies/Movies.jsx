import React, { useState } from 'react';
import { searchMovies } from 'servicesApi/ApiMovies';
import { ContainerInput } from './Movies.styled';
import { Link } from 'react-router-dom'; // Importar Link

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState(''); // estado para almacenar la búsqueda del usuario
  const [movies, setMovies] = useState([]); // estado para almacenar los resultados de la búsqueda

  const handleSearch = async (event) => {
    event.preventDefault(); // evitar la recarga de la página al enviar el formulario
    const results = await searchMovies(searchTerm); // llamar a la función searchMovies del otro componente y pasar la consulta del usuario
    setMovies(results); // actualizar el estado con los resultados de la búsqueda
    setSearchTerm(''); // actualizar el estado de searchTerm a una cadena vacía
  };

  return (
    <ContainerInput>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
        <Link to={`/moviesdetails/${movie.id}`}>{movie.title || movie.name}</Link>
        </li>
      ))}
      </ul>
    </ContainerInput>
  );
};

export default Movies;



