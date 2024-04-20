import React from 'react';
import DeckGL from '@deck.gl/react';
import {MapViewState} from '@deck.gl/core';
import {GeoJsonLayer, LineLayer} from '@deck.gl/layers';
import {Map, useControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {MapboxOverlay} from '@deck.gl/mapbox';
import type {MapboxOverlayProps} from '@deck.gl/mapbox';
import {getBerlinNextBikeStationsGeoJSON} from "~/lib/mobilityProviders/nextBike";
import bikeStationIcon from '~/assets/bike-station-icon.png'
function DeckGLOverlay(props: MapboxOverlayProps) {
    const overlay = useControl(() => new MapboxOverlay(props));
    overlay.setProps(props);
    return null;
}


const INITIAL_VIEW_STATE: MapViewState = {
    longitude: 13.389222256638657,
    latitude: 52.512786691183344,
    zoom: 13
};

type DataType = {
    from: [longitude: number, latitude: number];
    to: [longitude: number, latitude: number];
};

const BikeRentalMap = ({mapboxAccessToken}) => {
    const layers = [
        new GeoJsonLayer({
            data: getBerlinNextBikeStationsGeoJSON(),
            pickable: true,
            pointType: 'icon',
            getIcon: () => ({
                url: bikeStationIcon,
                width: 512,
                height: 512,
                anchorY: 512
            }),
            getIconSize: 30,
            iconSizeMinPixels: 30
        })
    ];
    return (
        <Map
            mapboxAccessToken={mapboxAccessToken}
            initialViewState={INITIAL_VIEW_STATE}
            style={{
                width: '100%',
                height: '100vh'
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <DeckGLOverlay layers={layers}/>
        </Map>
    );
}

export default BikeRentalMap