import { useState } from 'react';
import classes from './LocationList.module.scss';

const LocationList = ({ locationHandler }) => {
  const [active, setActive] = useState(0);

  const clickHandler = (data,id) => {
    locationHandler(data.mapLocation);
    setActive(id);
  };

  const locations = [
    {
      city: 'Тольятти',
      address: 'Автозаводское ш, 6, 1 Этаж',
      tel: 'тел 8 (848) 242-18-88',
      hours: '10:00 22:00',
      mapLocation: {
        lng: 49.39024,
        lat: 53.54194,
      },
    },

    {
      city: 'Тольятти',
      address: 'Революционная ул, 52А, 2 Этаж',
      tel: 'тел 8 (848) 242-18-88',
      hours: '10:00 22:00',
      mapLocation: {
        lng: 49.27154,
        lat: 53.51809,
      },
    },

    {
      city: 'Тольятти',
      address: 'Дзержинского ул, 21, 3 Этаж',
      tel: 'тел 8 (848) 242-18-88',
      hours: '10:00 22:00',
      mapLocation: {
        lng: 49.31947,
        lat: 53.53385,
      },
    },
  ];

  return (
    <ul className={classes.List}>
      {locations.map((data, id) => (
        <li
          key={id}
          onClick={() => clickHandler(data, id)}
          className={active === id ? `${classes.active}` : ''}
        >
          <h3 className={classes.Title}>{data.city}</h3>
          <span className={classes.itemAddress}>{data.address}</span>
          <span className={classes.Phone}>{data.Phone}</span>
          <span className={classes.Hours}>{data.hours}</span>
        </li>
      ))}
    </ul>
  );
};

export default LocationList;
