import React from 'react';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {setAirport} from '../actions/flightsAllAction';
// style and animation
import {motion} from 'framer-motion';
import {slideUp} from '../animation';
import {Link} from 'react-router-dom';

const SearchedFlight = ({departure, arrival, id, price, airline, show, setShow}) => {

    const idToString = id.toString();

    const dispatch = useDispatch();

    const {isLoading} = useSelector((store) => store.searched);
    const {airports} = useSelector((store) => store.flights);

    const loadMapHandler2 = (e) => {
        setShow(!show);
        document.body.style.overflow = 'hidden';
        const a = [...airports];
        const b = e.target.innerText;
        const airportSelected = a.filter((airport) => airport.codeIata == b );
        dispatch(setAirport(airportSelected));
    }
    
    return (
        <>
        {!isLoading && (
            
            <motion.div className="card-flight" variants={slideUp} initial='hidden' animate='show'>
                <div className="text one">
                    <h3>Company: <br/> <span><i>{airline}</i></span></h3>
                    <h3>Flight ID: <br/> <i>{id}</i> </h3>
                </div>
                <motion.div layoutId={`text ${idToString}`} className="text two">
                    <h3>from: <br/>
                        <Link to={`/flight/${id}`} >
                            <motion.span onClick={loadMapHandler2}>{departure}</motion.span>
                        </Link>
                    </h3>
                    <h3>to:<br/>
                        <Link to={`/flight/${id}`}>
                            <motion.span onClick={loadMapHandler2}>{arrival}</motion.span>
                        </Link>
                    </h3>
                </motion.div>
                <div className="text three">
                    <h3>Price:</h3> 
                    <h3> <span><i>€{price}</i></span></h3>
                </div>
            </motion.div>
        )}
        </>
    )
}

export default SearchedFlight;