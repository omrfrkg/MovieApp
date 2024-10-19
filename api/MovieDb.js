import axios from "axios";
import { apiKey } from "../src/constants";

// endpoints
const apiBaseUrl = `https://api.themoviedb.org/3/`;
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?language=en-US&page=1`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?language=en-US&page=1`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?include_adult=false&language=en-US&page=1`;

// dynamic endpoints
const movieDetailsEndpoint = (movie_id) =>
  `${apiBaseUrl}/movie/${movie_id}?language=en-US`;
const movieCreditsEndpoint = (movie_id) =>
  `${apiBaseUrl}/movie/${movie_id}/credits?language=en-US`;
const similarMoviesEndpoint = (movie_id) =>
  `${apiBaseUrl}/movie/${movie_id}/similar?language=en-US&page=1`;

const personDetailsEndpoint = (person_id) =>
  `${apiBaseUrl}/person/${person_id}`;
const personMoviesEndpoint = (person_id) =>
  `${apiBaseUrl}/person/${person_id}/movie_credits?language=en-US`;

export const image500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;

export const image342 = (path) =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : null;

export const image185 = (path) =>
  path ? `https://image.tmdb.org/t/p/w185${path}` : null;

export const fallbackMoviePoster =
  "https://img.freepik.com/free-vector/black-background-with-focus-spot-light_1017-27230.jpg?t=st=1729334422~exp=1729338022~hmac=a7095b60f4b42ce7c83a14434a36f367df08c76d73785b0273aa445704ee5a01&w=1380";

export const fallbackPersonImage =
  "https://img.freepik.com/free-vector/user-group-with-shadow_78370-7019.jpg?t=st=1729334801~exp=1729338401~hmac=d0c4bfb9425ebb4f3651a51a943ea1ce2747e6f0657bb44296b602c1dc08a106&w=740";

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
    headers: {
      Authorization: apiKey,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error : ", error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
};

export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint);
};

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};

export const fetchMovieDetails = (id) => {
  return apiCall(movieDetailsEndpoint(id));
};

export const fetchMovieCredits = (id) => {
  return apiCall(movieCreditsEndpoint(id));
};

export const fetchSimilarMovies = (id) => {
  return apiCall(similarMoviesEndpoint(id));
};

export const fetchPersonDetails = (id) => {
  return apiCall(personDetailsEndpoint(id));
};

export const fetchPersonMovies = (id) => {
  return apiCall(personMoviesEndpoint(id));
};

export const searchMovies = (params) => {
  return apiCall(searchMoviesEndpoint, params);
};
