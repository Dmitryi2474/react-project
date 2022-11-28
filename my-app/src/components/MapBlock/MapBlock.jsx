import classes from './MapBlock.module.scss';
import React, { useState } from 'react';
import LocationList from './Locations/LocationList';
import Map from './Map/Map';

const MapBlock = () => {
  const [mapLocation, setMapLocation] = useState({
    lat: 30.239248,
    lng: -97.768896,
  });

  return (
    <div className={classes.MapBlock}>
      <h2 className={classes.title}>посетите наши магазины</h2>
      <div className={classes.Wrapper}>
        <LocationList locationHandler={setMapLocation} />
        <Map mapLocation={mapLocation} />
      </div>
    </div>
  );
};

export default MapBlock;
