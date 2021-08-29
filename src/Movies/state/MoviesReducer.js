import {
  FETCH_MOVIES,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  REQUEST_MOVIE_DETAILS,
  REQUEST_MOVIE_DETAILS_FAIL,
  REQUEST_MOVIE_DETAILS_SUCCESS,
} from './MoviesTypes';
const initialState = {
  movies: [],
  loadingMovies: true,
  movieDetails: {},
  loadingMovieDetails: true,
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loadingMovies: true,
      };
    case MOVIE_LIST_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loadingMovies: false,
      };
    case MOVIE_LIST_FAIL:
      return {
        ...state,
        movies: action.payload,
        loadingMovies: false,
      };
    case REQUEST_MOVIE_DETAILS:
      return {
        ...state,
        loadingMovieDetails: true,
      };
    case REQUEST_MOVIE_DETAILS_FAIL:
      return {
        ...state,
        movieDetails: action.payload,
        loadingMovieDetails: false,
      };
    case REQUEST_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
        loadingMovieDetails: false,
      };
    default:
      return state;
  }
};
export default movieReducer;
