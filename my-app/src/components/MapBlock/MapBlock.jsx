import classes from './MapBlock.module.scss';
import React, { useState } from 'react';
import LocationList from './Locations/LocationList';
import Map from './Map/Map';

const MapBlock = () => {
  const [mapLocation, setMapLocation] = useState({
    lat: 53.54167,
    lng: 49.39048,
  });

  return (
    <div className={classes.MapBlock}>
      <h2 className={classes.title}>Посетите наши магазины</h2>
      <div className={classes.Wrapper}>
        <LocationList locationHandler={setMapLocation} />
        <Map mapLocation={mapLocation} />
      </div>
    </div>
  );
};

export default MapBlock;
