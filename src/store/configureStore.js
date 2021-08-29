import {createStore, combineReducers, applyMiddleware} from 'redux';
import moviesReducer from '../Movies/state/MoviesReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({movies: moviesReducer});
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
