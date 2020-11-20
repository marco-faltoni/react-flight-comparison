import axios from 'axios';
const base_url = 'https://recruitment.shippypro.com/flight-engine/api';
const allAirportsURL = `${base_url}/airports/all`;
const allAirlinesURL = `${base_url}/airlines/all`;

export const fetchSelected = (departure, arrival) => async (dispatch) => {

    const flightsFromToURL = `${base_url}/flights/from/${departure}/to/${arrival}`;

    const auth = `${process.env.REACT_APP_SHIPPY_KEY}`;
    console.log(departure, arrival);

    // fecth axios
    const selectedAirports = await axios.get(flightsFromToURL, {
        headers: {
            'Authorization': auth,
            'Access-Control-Allow-Origin': '*'
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

    const flightsSelected = selectedAirports.data.data;
    const airports =  AirportsData.data.data;
    const airlines =  AirlinesData.data.data;

    let arrivalID;
    let departureID;
    let airlineID;
    
    // sostituisco gli id di arrivo e partenza con i corrispondenti nomi in stringa
    for (let i = 0; i < flightsSelected.length; i++) {
        arrivalID = flightsSelected[i].arrivalAirportId;
        departureID = flightsSelected[i].departureAirportId;
        airports.map((airport) => {
            if (airport.id === departureID) {
                return flightsSelected[i].departureAirportId = airport.codeIata
            }
            if (airport.id === arrivalID) {
                return flightsSelected[i].arrivalAirportId = airport.codeIata
            }
        });
        // console.log(arrivalID);
        // console.log(departureID);
    }

    // sostituisco gli id di delle compagnie con i corrispondenti nomi in stringa
    for (let i = 0; i < flightsSelected.length; i++) {
        airlineID = flightsSelected[i].airlineId;
        airlines.map((airline) => {
            if (airlineID === airline.id) {
                return flightsSelected[i].airlineId = airline.name;
            }
        });
    }    

    console.log(flightsSelected);

    dispatch({
        type: 'GET_SELECTED',
        payload: {
            searched: flightsSelected,
        }
    })
}