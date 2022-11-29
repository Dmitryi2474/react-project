import GoogleMapReact from 'google-map-react';
import React from 'react';

import classes from './Map.module.scss';

type LocationBlockProps = {
  mapLocation: {
    lat: number,
    lng: number,
  }
}

type textProps = {
  text: string
  lat: number,
  lng: number,
}

const Map: React.FC<LocationBlockProps> = ({ mapLocation }) => {
  const AnyReactComponent: React.FC<textProps> = ({ text }) => (
    <div className={classes.Marker}>{text}</div>
  );

  const mapOptions = {
    center: {
      lat: mapLocation.lat,
      lng: mapLocation.lng,
    },
    zoom: 15,
  };

  return (
    <div id="google__map" className={classes.Map}>
      <GoogleMapReact center={mapOptions.center} zoom={mapOptions.zoom}>
        <AnyReactComponent text='' lat={mapLocation.lat} lng={mapLocation.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
