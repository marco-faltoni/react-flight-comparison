import {combineReducers} from 'redux';
import flightsReducer from './flightsReducer';
import fetchSelected from './searchedReducers';

const rootReducers = combineReducers ({
    flights: flightsReducer,
    searched: fetchSelected,
});

export default rootReducers;