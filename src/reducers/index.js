import {combineReducers} from 'redux';
import flightsReducer from './flightsReducer';

const rootReducers = combineReducers ({
    flights: flightsReducer
});

export default rootReducers;