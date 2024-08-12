import React, { useEffect, useState } from "react";
import { getTrandingMovies } from "../../api/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const data = await getTrandingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);
  console.log(movies);
  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
