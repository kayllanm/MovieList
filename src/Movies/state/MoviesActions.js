import {
  FETCH_MOVIES,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  REQUEST_MOVIE_DETAILS,
  REQUEST_MOVIE_DETAILS_FAIL,
  REQUEST_MOVIE_DETAILS_SUCCESS,
} from './MoviesTypes';
import axios from 'react-native-axios';

const BASE_URL = 'https://api.themoviedb.org';

export const fetchMovies = () => {
  return function action(dispatch) {
    dispatch({type: FETCH_MOVIES});

    const request = axios({
      method: 'GET',
      url: `${BASE_URL}/3/movie/popular?api_key=ccc7aebe9fa12c704d52765bb9a16ee6&language=en-US&page=1`,
      headers: [],
    });

    return request.then(
      response =>
        dispatch({
          type: MOVIE_LIST_SUCCESS,
          payload: response.data,
        }),
      () =>
        dispatch({
          type: MOVIE_LIST_FAIL,
          payload: {error: true},
        }),
    );
  };
};

export const getMovieDetails = movie_id => {
  return function action(dispatch) {
    dispatch({type: REQUEST_MOVIE_DETAILS});

    const request = axios({
      method: 'GET',
      url: `${BASE_URL}/3/movie/${movie_id}?api_key=ccc7aebe9fa12c704d52765bb9a16ee6&language=en-US`,
      headers: [],
    });

    return request.then(
      response =>
        dispatch({
          type: REQUEST_MOVIE_DETAILS_SUCCESS,
          payload: response.data,
        }),
      () =>
        dispatch({
          type: REQUEST_MOVIE_DETAILS_FAIL,
          payload: {error: true},
        }),
    );
  };
};
