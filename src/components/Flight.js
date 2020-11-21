import React from 'react';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {setAirport} from '../actions/flightsAllAction';
// style and animation
import {motion} from 'framer-motion';
import {slideUp} from '../animation';
import {Link} from 'react-router-dom';

const Flight = ({departure, arrival, id, price, airline, show, setShow}) => {

    const idToString = id.toString();

    const dispatch = useDispatch();

    // getting back the data
    const {airports} = useSelector((store) => store.flights);

    const loadMapHandler = (e) => {
        setShow(!show);
        document.body.style.overflow = 'hidden';
        const a = [...airports];
        const b = e.target.innerText;
        const airportSelected = a.filter((airport) => airport.codeIata == b );
        dispatch(setAirport(airportSelected));
    }
    
    return (
        <motion.div layoutId={`title ${idToString}`} className="card-flight" variants={slideUp} initial='hidden' animate='show'>
            <motion.div  className="text one">
                <h3>Company: <br/> <span><i>{airline}</i></span></h3>
                <h3>Flight ID: <br/> <i>{id}</i> </h3>
            </motion.div>
            <motion.div layoutId={idToString} className="text two">
                    <h3>from: <br/>
                        <Link to={`/flight/${id}`} >
                            <motion.span onClick={loadMapHandler}>{departure}</motion.span>
                        </Link>
                    </h3>
                    <h3>to:<br/>
                        <Link to={`/flight/${id}`}>
                            <motion.span onClick={loadMapHandler}>{arrival}</motion.span>
                        </Link>
                    </h3>
            </motion.div>
            <motion.div className="text three">
                <h3>Price:</h3> 
                <h3> <span><i>€{price}</i></span></h3>
            </motion.div>
        </motion.div>
    )
}

export default Flight;