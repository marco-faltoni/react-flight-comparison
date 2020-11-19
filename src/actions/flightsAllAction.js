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
    
    const AirportsData = await axios.get(allAirportsURL(), {
        headers: {
            'Authorization': auth
        },
    });

    const flights_price_order = flightsData.data.data;
    const airports =  AirportsData.data.data;
    // console.log(airports);

    // ordino per prezzo ascendente i dati che ho ricevuto
    flights_price_order.sort((a, b) => {
        if ( a.price < b.price ){
            return -1;
        }
        if ( a.price > b.price ){
            return 1;   
        }
        return 0;
    });

    let arrivalID;
    let departureID;
    
    // sostituisco gli id di arrivo e partenza con i corrispondenti nomi in stringa
    for (let i = 0; i < flights_price_order.length; i++) {
        arrivalID = flights_price_order[i].arrivalAirportId;
        departureID = flights_price_order[i].departureAirportId;
        airports.map((airport) => {
            if (airport.id === departureID) {
                return flights_price_order[i].departureAirportId = airport.codeIata
            }
            if (airport.id === arrivalID) {
                return flights_price_order[i].arrivalAirportId = airport.codeIata
            }
        });
        // console.log(arrivalID);
        // console.log(departureID);
    }

    console.log(flights_price_order);


    dispatch({
        type: 'FETCH_FLIGHTS',
        payload: {
            allFlights: flights_price_order,
        }
    })
}