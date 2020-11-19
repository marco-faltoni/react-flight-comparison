import axios from 'axios';
import {allFlightsURL} from '../api';
import {flightsFromToURL} from '../api';
import {allAirportsURL} from '../api';
import {allAirlinesURL} from '../api';

// action creator
export const loadFlights = () => async (dispatch) => {
    const auth = `${process.env.REACT_APP_SHIPPY_KEY}`;
    // fecth axios
    const flightsData = await axios.get(allFlightsURL(), {
        headers: {
            'Authorization': auth
        },
    });
    
    console.log(flightsData);

    dispatch({
        type: 'FETCH_FLIGHTS',
        payload: {
            allFlights: flightsData.data.data,
        }
    })
}