// b11fece05b7e560a4e462adc3f274cd6;
import axios from "axios";
// "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  language: "en-US",
  api_key: "b11fece05b7e560a4e462adc3f274cd6",
};

export async function getTrandingMovies() {
  const response = await axios.get("/trending/movie/week");
  return response.data;
}
// https://api.themoviedb.org/3/search/movie?query=Batman&include_adult=false&language=en-US&page=1

export async function getSearchingMovies(query) {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data;
}

// https://api.themoviedb.org/3/movie/{movie_id}
export async function getMoviesDetails(id) {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
}
// /movie/{movie_id}/credits
export async function getCredits(id) {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
}

export async function getReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
}
