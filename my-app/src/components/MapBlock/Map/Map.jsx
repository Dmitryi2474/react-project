import GoogleMapReact from 'google-map-react';

import classes from './Map.module.scss';

const Map = ({ mapLocation }) => {
  const AnyReactComponent = ({ text }) => (
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
        <AnyReactComponent lat={mapLocation.lat} lng={mapLocation.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
