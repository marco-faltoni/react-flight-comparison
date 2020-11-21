import React from 'react';
// style and animation
import {motion} from 'framer-motion';
import {slideDown} from '../animation';

const Nav = () => {

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <motion.div onClick={reloadPage} className="nav-bar" variants={slideDown} initial='hidden' animate='show'>
            <h2>ShippyPro Challenge</h2>
        </motion.div>
    );
}

export default Nav ;