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
    // console.log(allFlights);

    return (
        <div className='flights-container'>
            <h2>Voli Diretti piu economici</h2>
            <div className="card-container">
                {allFlights.map((flight)=> {
                    return <Flight arrival={flight.arrivalAirportId} departure={flight.departureAirportId} id={flight.id} price={flight.price} key={flight.id} /> 
                })}
            </div>
        </div>
    );
}


export default Home;