import React from 'react';
// Redux
import {useDispatch} from 'react-redux';
// style and animation
import {motion} from 'framer-motion';
import {slideUp} from '../animation';

const Flight = ({departure, arrival, id, price, airline}) => {
    
    return (
        <motion.div layoutId={id} className="card-flight" variants={slideUp} initial='hidden' animate='show'>
            <div className="text one">
                <h3>Company: <br/> <span><i>{airline}</i></span></h3>
                <h3>Flight ID: <br/> <i>{id}</i> </h3>
            </div>
            <div className="text two">
                <h3>from: <br/> <span>{departure}</span></h3>
                <h3>to: <br/> <span>{arrival}</span></h3>
            </div>
            <div className="text three">
                <h3>Price:</h3> 
                <h3> <span><i>€{price}</i></span></h3>
            </div>
        </motion.div>
    )
}

export default Flight;