import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "../../api/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const data = await getCredits(movieId);
        console.log(data);
        setCredits(data.cast);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [movieId]);
  return (
    <div>
      {credits.map((credit) => (
        <div key={credit.id}>
          <img src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`} />
          <p>{credit.character}</p>
          <p>{credit.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCast;
