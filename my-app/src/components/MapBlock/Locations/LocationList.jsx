import React from 'react';
import LocationItem from './LocationItem';

import classes from './LocationList.module.scss';

const LocationList = (props) => {
  const locations = [
    {
      city: 'Тольятти',
      address: 'Автозаводское ш, 6',
      tel: 'тел 8 (848) 242-18-88',
      hours: '10:00 22:00',
      mapLocation: {
        lng: 49.39048,
        lat: 53.54167,
      },
    },
    {
      city: 'Тольятти',
      address: 'Революционная ул, 52А',
      tel: 'тел 8 (848) 242-18-88',
      hours: '10:00 22:00',
      mapLocation: {
        lng: 49.27154 ,
        lat: 53.51809,
      },
    },

    {
      city: 'Тольятти',
      address: 'Дзержинского ул, 21',
      tel: 'тел 8 (848) 242-18-88',
      hours: '0:00 22:00',
      mapLocation: {
        lng: 49.31947,
        lat: 53.53385,
      },
    },
  ];

  return (
    <ul className={classes.List}>
      {locations.map((location) => {
        return (
          <LocationItem
            locationHandler={props.locationHandler}
            key={location.city}
            data={location}
          />
        );
      })}
    </ul>
  );
};

export default LocationList;
