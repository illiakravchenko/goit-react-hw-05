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
