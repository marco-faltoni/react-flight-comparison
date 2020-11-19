const initState = {
    allFlights: [],
    airports: [],
}

const flightsReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_FLIGHTS":
            return {...state, allFlights: action.payload.allFlights, airports:action.payload.airports};
        default:
            return {...state};
    }
}

export default flightsReducer;