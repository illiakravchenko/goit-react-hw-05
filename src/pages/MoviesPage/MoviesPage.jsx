import React, { useEffect, useState } from "react";
import { getSearchingMovies } from "../../api/api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchValue.get("query");
  useEffect(() => {
    if (!query) {
      return;
    }
    async function getData() {
      try {
        const data = await getSearchingMovies(query);
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target.elements.search.value;
    setSearchValue({ query: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="search" />
        <button className={s.searchBtn}>Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
