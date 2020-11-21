const initState = {
    allFlights: [],
    airports: [],
    selectedAirport: [],
}

const flightsReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_FLIGHTS":
            return {...state, allFlights: action.payload.allFlights, airports:action.payload.airports};
        case "SET_AIRPORT":
            return {...state, selectedAirport: action.payload.selectedAirport};
        default:
            return {...state};
    }
}

export default flightsReducer;