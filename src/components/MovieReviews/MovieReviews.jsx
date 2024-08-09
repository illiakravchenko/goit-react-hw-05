import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../api/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getReviews(movieId);
        console.log(data);
        setReviews(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [movieId]);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
          <p>
            <strong>Rating:</strong> {review.author_details?.rating || "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MovieReviews;
