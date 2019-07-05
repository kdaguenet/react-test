import { combineReducers } from 'redux';
import ReducerCountries from './reducer_countries'

const rootReducer = combineReducers({
	countriesReducer: ReducerCountries
});

export default rootReducer;
