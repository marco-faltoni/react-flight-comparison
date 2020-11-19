const initState = { 
    flightsSearched: [],
    isLoading: true, 
};

const detailsReducer = (state=initState, action) => {
    switch(action.type){
        case "GET_SELECTED":
            return {
                ...state, 
                flightsSearched: action.payload.searched,
                isLoading: false,
            };
        case "LOADING":
            return{
                ...state,
                isLoading: true,
            }
                
        default:
            return {...state};
    }
}

export default detailsReducer;