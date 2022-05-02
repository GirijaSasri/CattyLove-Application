

import { Wrapper, Status } from '@googlemaps/react-wrapper';
import React, { useState } from 'react';
import CONSTANTS from '../../utility/Constants';
import Map from './Map/Map';
import Marker from './Marker/Marker'


const render = status => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
};


const MapWrapper = ({ onMarkerClick = () => {}, markerPosition = { lat: 6.927079, lng: 79.861244 } }) => {

    const [position, setPosition] = useState(markerPosition)
    const [zoom, setZoom] = useState(9)
    const [center, setCenter] = useState(markerPosition)


    const clickHandler = e => {
        setPosition(e.latLng)
        onMarkerClick(e.latLng.toJSON())
    }

    
    const idleHandler = m => {
        setZoom(m.getZoom());
        setCenter(m.getCenter().toJSON());
    };

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Wrapper apiKey={CONSTANTS.googleApiKey} render={render}>
                <Map 
                    center={center} 
                    zoom={zoom} 
                    style={{ width: '100%', height: '400px' }} 
                    onClick={clickHandler}
                    onIdle={idleHandler}>
                    {position && <Marker position={position} />}
                </Map>
            </Wrapper>
        </div>
    )
};

export default MapWrapper;