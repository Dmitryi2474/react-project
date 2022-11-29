import { useDispatch, useSelector } from 'react-redux';
import { selectMapActive, setActive } from '../../../redux/slices/mapSlice';
import { setMapLocation } from '../../../redux/slices/mapSlice';

import classes from './LocationList.module.scss';

const LocationList = () => {
  const activeItem = useSelector(selectMapActive);
  const dispatch = useDispatch();

  const clickHandler = (data: any, id: number) => {
    dispatch(setActive(id));
    dispatch(setMapLocation(data.mapLocation));
  };

  const locations = [
    {
      city: 'Тольятти',
      address: 'Автозаводское ш, 6, 1 Этаж',
      tel: 'тел: 8 (848) 242-18-88',
      hours: '10:00 22:00',
      mapLocation: {
        lng: 49.39024,
        lat: 53.54194,
      },
    },

    {
      city: 'Тольятти',
      address: 'Революционная ул, 52А, 2 Этаж',
      tel: 'тел: 8 (848) 242-18-88',
      hours: '10:00 22:00',
      mapLocation: {
        lng: 49.27154,
        lat: 53.51809,
      },
    },

    {
      city: 'Тольятти',
      address: 'Дзержинского ул, 21, 3 Этаж',
      tel: 'тел: 8 (848) 242-18-88',
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
          className={activeItem === id ? `${classes.active}` : ''}
        >
          <h3 className={classes.Title}>{data.city}</h3>
          <span className={classes.itemAddress}>{data.address}</span>
          <span className={classes.Phone}>{data.tel}</span>
          <span className={classes.Hours}>{data.hours}</span>
        </li>
      ))}
    </ul>
  );
};

export default LocationList;
