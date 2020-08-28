import axios from "axios";


const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = 'adfa820f896a6471e39118989358316e';

export const fetchMoviesTrend = () => axios.get(BASE_URL + 'trending/all/day' + '?api_key=' + API_KEY);
export const fetchMoviesToSearh = (query) => (axios.get(BASE_URL + 'search/movie' + '?api_key=' + API_KEY + '&query=' + query));
export const fetchMoviesDetails = (id) => (axios.get(BASE_URL + 'movie/' + id + '?api_key=' + API_KEY));
export const fetchMoviesCast = (id) => (axios.get(BASE_URL + 'movie/' + id + '/credits' + '?api_key=' + API_KEY));
export const fetchMoviesReviews = (id) => (axios.get(BASE_URL + 'movie/' + id + '/reviews' + '?api_key=' + API_KEY));
