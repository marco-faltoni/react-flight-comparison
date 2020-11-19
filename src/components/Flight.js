import React from 'react';
// Redux
import {useDispatch} from 'react-redux';
// import {loadDetails} from '../actions/detailAction';
// // style and animation
// import styled from 'styled-components';
// import {motion} from 'framer-motion';
// import {slideUp} from '../animation';
// import {Link} from 'react-router-dom';
// import {resizeImg} from '../util';

const Flight = ({departure, arrival, id, price}) => {
    
    return (
        <div className="text">
            <h3>{departure}</h3>
            <h3>{arrival}</h3>
            <h3>{id}</h3>
            <h3>{price}</h3>
        </div>
    )
}

export default Flight;