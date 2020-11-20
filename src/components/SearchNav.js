import React, {useState} from 'react';
// Redux
import {useDispatch} from 'react-redux';
// style and animation
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {slideDown} from '../animation';

const Nav = () => {
    // fecth flights
    const dispatch = useDispatch();

    const clearSearch = () => {
        dispatch({type: "CLEAR_SEARCHED"});
    }

    return (
        <motion.div onClick={clearSearch} className="nav-bar" variants={slideDown} initial='hidden' animate='show'>
            <h2>ShippyPro Challenge</h2>
        </motion.div>
    );
}

export default Nav ;