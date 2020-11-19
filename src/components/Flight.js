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
        <div className="card-flight">
            <div className="text">
                <h3>Partenza da: <i>{departure}</i> </h3>
                <h3>Arrivo a: <i>{arrival}</i> </h3>
                <h3>Id Volo: <i>{id}</i> </h3>
                <h3>Prezzo biglietto: <i>{price}€</i></h3>
            </div>
        </div>
    )
}

export default Flight;