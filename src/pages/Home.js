import React, {useEffect, useState} from 'react';
// components
import Flight from '../components/Flight';
import SearchedFlight from '../components/SearchedFlights';
// Redux
import {useDispatch, useSelector} from 'react-redux';
// actions
import {loadFlights} from '../actions/flightsAllAction';
import {fetchSelected} from '../actions/searchedAction';
import { useAlert } from 'react-alert'
// style and animation
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {fadeIn} from '../animation';

function Home() {
    const [selectValue, setSelectValue] = useState('');
    const [selectValue2, setSelectValue2] = useState('');

    const alert = useAlert()
    
    // fecth flights
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loadFlights());
    },[dispatch]);

    const selectHandler = (e) => {
        if (e.target.value.length === 3) {
            setSelectValue(e.target.value);
            // alert.show('Oh look, an alert!')
        }
    }
    const selectHandler2 = (e) => {
        if (e.target.value.length === 3) {
            setSelectValue2(e.target.value);
            // alert.show('Oh look, an alert!')
        }
    }

    const submitSearch = async (e) => {
        e.preventDefault();
        if (selectValue === '' && selectValue2 === '') {
            alert.error('Select the airports!')
        } else if(selectValue === '') {
            alert.error('Select the departure airport!');
            setSelectValue2('');
            document.querySelector('.two').selectedIndex = 0;
        } else if(selectValue2 === '') {
            alert.error('Select the arrival airport!');
            setSelectValue('');
            document.querySelector('.one').selectedIndex = 0;
        } else {
            dispatch(fetchSelected(selectValue, selectValue2));
            setSelectValue('');
            setSelectValue2('');
            document.querySelector('.one').selectedIndex = 0;
            document.querySelector('.two').selectedIndex = 0;
        }
        // console.log(selectValue, selectValue2);
    }

    const clearSearch = () => {
        dispatch({type: "CLEAR_SEARCHED"});
    }

    // getting back the data
    const {allFlights, airports} = useSelector((store) => store.flights);
    const {flightsSearched} = useSelector((store) => store.searched);
    let directFlight = [];
    let stopOversFlight = [];
    let removeItem = [];
    let lastItem = [];

    if (flightsSearched.length === 1) {
        directFlight = flightsSearched;
        console.log(directFlight);
    } else if (flightsSearched.length > 1) {
        stopOversFlight = flightsSearched;
        removeItem = [...flightsSearched];
        lastItem = removeItem.pop();
    }


    return (
        <div className='flights-container'>
            <AnimateSharedLayout type="crossfade">
                <motion.div className="select" variants={fadeIn} initial='hidden' animate='show'>
                    <form onSubmit={submitSearch} className="search">
                        <select onChange={selectHandler} className="custom-select one">
                            <option>choose the departure airport</option>
                            {airports.map((airport) => {
                                return <option value={airport.codeIata} key={airport.id} >{airport.codeIata}</option>
                            })}
                        </select>
                        <select onChange={selectHandler2} className="custom-select two">
                            <option selected>choose the arrival airport</option>
                            {airports.map((airport) => {
                                return <option value={airport.codeIata} key={airport.id} >{airport.codeIata}</option>
                            })}
                        </select>
                        <button type='submit'>Go</button>
                        <button type='button' onClick={clearSearch}>Clear</button>
                    </form>
                    
                </motion.div>
                
                    {directFlight.length ? (
                        <div className='searched'>
                            <motion.h2 variants={fadeIn} initial='hidden' animate='show'>Flight with no Stopover: <span>{directFlight[0].departureAirportId}</span> a: <span>{directFlight[0].arrivalAirportId}</span></motion.h2>
                            <div className="card-container">
                            <AnimatePresence>
                                {flightsSearched.map((flight)=> {
                                    return <SearchedFlight arrival={flight.arrivalAirportId} departure={flight.departureAirportId} id={flight.id} price={flight.price} key={flight.id} airline={flight.airlineId}/> 
                                })}
                            </AnimatePresence>
                            </div>
                        </div>
                    ): ''}

                    {stopOversFlight.length ? (
                        <div className='searched'>
                            <motion.h2 variants={fadeIn} initial='hidden' animate='show'>Flight with <span>{stopOversFlight.length - 1}</span> Stopovers from: <span>{stopOversFlight[0].departureAirportId}</span> to: <span>{ removeItem.length ? (lastItem.arrivalAirportId) : ''}</span></motion.h2>
                            <div className="card-container">
                                {flightsSearched.map((flight)=> {
                                    return <SearchedFlight arrival={flight.arrivalAirportId} departure={flight.departureAirportId} id={flight.id} price={flight.price} key={flight.id} airline={flight.airlineId} /> 
                                })}
                            </div>
                        </div>
                    ): ''}
                

                <motion.h2 variants={fadeIn} initial='hidden' animate='show'>Most Convenient Flights under 1000€ with no Stopovers</motion.h2>
                <div className="card-container">
                    {allFlights.map((flight)=> {
                        return <Flight arrival={flight.arrivalAirportId} departure={flight.departureAirportId} id={flight.id} price={flight.price} key={flight.id} airline={flight.airlineId} /> 
                    })}
                </div>
            </AnimateSharedLayout>
        </div>
    );
}


export default Home;