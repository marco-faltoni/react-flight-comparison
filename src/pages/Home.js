import React, {useEffect} from 'react';
// components
import Flight from '../components/Flight';
// import GameDetails from '../components/GameDetails';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadFlights} from '../actions/flightsAllAction';
// // style and animation
// import styled from 'styled-components';
// import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
// import {fadeIn} from '../animation';
// import {useLocation} from 'react-router-dom';

function Home() {
    
    // fecth agmes
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loadFlights());
    },[dispatch]);
    // getting back the data
    const {allFlights} = useSelector((store) => store.flights);
    console.log(allFlights);

    return (
        <div>
            <h2>home</h2>
            {allFlights.map((flight)=> {
                return <Flight departure={flight.departureAirportId} arrival={flight.arrivalAirportId} id={flight.id} price={flight.price} key={flight.id} /> 
            })}
        </div>
    );
}

export default Home;