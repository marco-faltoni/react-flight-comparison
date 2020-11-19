const initState = {
    allFlights: [],
}

const flightsReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_FLIGHTS":
            return {...state, allFlights: action.payload.allFlights};
        default:
            return {...state};
    }
}

export default flightsReducer;