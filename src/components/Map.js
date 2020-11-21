import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
// Redux
import {useSelector} from 'react-redux';
// style and animation
import {motion} from 'framer-motion';
import {useHistory} from 'react-router-dom';

export const MapDetails = ({pathID, show, setShow}) => {
    // getting back the data
    const {selectedAirport} = useSelector((store) => store.flights);
    

    // exit page detail
    const history = useHistory();
    const exitHandler = (e) => {
        const element = e.target;
        // console.log(element);
        // go back to main page
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            setShow(!show);
            history.push('/');
        }
    };

    return (
        <>
        {show && (
            selectedAirport.map((airport) => {
                return(
                    <motion.div layoutId={`text ${pathID}`} layoutId={pathID} key={uuidv4()} className='shadow' onClick={exitHandler}>
                        <motion.div className='detail'>
                            <MapContainer className='map-cont' center={[airport.latitude, airport.longitude]} zoom={13} scrollWheelZoom={true}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[airport.latitude, airport.longitude]}>
                                    <Popup>
                                        {airport.codeIata} Airport.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </motion.div>
                    </motion.div>
                ) 
            })
        )}
        </>
    )
}

// for animation issue i have to duplicate the function specific for searchedFlight
export const MapDetails2 = ({pathID, show, setShow}) => {
    // getting back the data
    const {selectedAirport} = useSelector((store) => store.flights);
    

    // exit page detail
    const history = useHistory();
    const exitHandler = (e) => {
        const element = e.target;
        // console.log(element);
        
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            setShow(!show);
            history.push('/');
        }
    };

    return (
        <>
        {show && (
            selectedAirport.map((airport) => {
                return(
                    <motion.div layoutId={`text ${pathID}`} key={uuidv4()} className='shadow' onClick={exitHandler}>
                        <motion.div className='detail'>
                            <MapContainer className='map-cont' center={[airport.latitude, airport.longitude]} zoom={13} scrollWheelZoom={true}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[airport.latitude, airport.longitude]}>
                                    <Popup>
                                        {airport.codeIata} Airport.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </motion.div>
                    </motion.div>
                ) 
            })
        )}
        </>
    )
}