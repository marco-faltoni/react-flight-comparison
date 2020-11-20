import axios from 'axios';

const base_url = 'https://recruitment.shippypro.com/flight-engine/api';
const allFlightsURL = `${base_url}/flights/all`;
const allAirportsURL = `${base_url}/airports/all`;
const allAirlinesURL = `${base_url}/airlines/all`;

// action creator
export const loadFlights = () => async (dispatch) => {
    const auth = `${process.env.REACT_APP_SHIPPY_KEY}`;
    // fecth axios
    const flightsData = await axios.get(allFlightsURL, {
        headers: {
            'Authorization': auth
        },
    });
    
    const AirportsData = await axios.get(allAirportsURL, {
        headers: {
            'Authorization': auth
        },
    });

    const AirlinesData = await axios.get(allAirlinesURL, {
        headers: {
            'Authorization': auth
        },
    });

    const flights_price_order = flightsData.data.data;
    const airports =  AirportsData.data.data;
    const airlines =  AirlinesData.data.data;
    // console.log(airlines);

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
    let airlineID;
    
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
    
    // sostituisco gli id di delle compagnie con i corrispondenti nomi in stringa
    for (let i = 0; i < flights_price_order.length; i++) {
        airlineID = flights_price_order[i].airlineId;
        airlines.map((airline) => {
            if (airlineID === airline.id) {
                return flights_price_order[i].airlineId = airline.name;
            }
        });
    }

    console.log(flights_price_order);

    dispatch({
        type: 'FETCH_FLIGHTS',
        payload: {
            allFlights: flights_price_order,
            airports: airports,
        }
    })
}