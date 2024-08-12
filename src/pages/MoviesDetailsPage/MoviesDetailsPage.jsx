import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMoviesDetails } from "../../api/api";

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = location.state?.from ?? "/movies";

  useEffect(() => {
    async function getData() {
      try {
        const data = await getMoviesDetails(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={goBackRef}>Go back</Link>
      {movie && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div>
            <h1>{movie.title}</h1>
            <p>Popularity {movie.vote_average * 10}%</p>
            <p>Description: </p>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
      <ul>
        <li>
          <NavLink to="cast" state={{ from: goBackRef }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: goBackRef }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MoviesDetailsPage;
