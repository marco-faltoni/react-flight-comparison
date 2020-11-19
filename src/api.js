// base url
const base_url = 'https://recruitment.shippypro.com/flight-engine/api';

// all flights
export const allFlightsURL = () => `${base_url}/flights/all`;
// flights from to
export const flightsFromToURL = (departure, arrival) => `${base_url}​/flights​/from​/${departure}​/to​/${arrival}`;
// all airports
export const allAirportsURL = () => `${base_url}/airports/all`;
// all airlines
export const allAirlinesURL = () => `${base_url}/airlines/all`;