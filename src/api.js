// base url
const base_url = 'https://recruitment.shippypro.com/flight-engine/api';

// https://cors-anywhere.herokuapp.com/

// all flights
export const allFlightsURL = () => `${base_url}/flights/all`;
// flights from to
export const flightsFromToURL = () => `"https://recruitment.shippypro.com/flight-engine/api/flights/from/MXP/to/NAP"`;
// all airports
export const allAirportsURL = () => `${base_url}/airports/all`;
// all airlines
export const allAirlinesURL = () => `${base_url}/airlines/all`;