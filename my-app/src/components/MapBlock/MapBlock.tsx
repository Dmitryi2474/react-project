import LocationList from './Locations/LocationList';
import Map from './Map/Map';
import { useSelector } from 'react-redux';
import { selectMapLocation } from '../../redux/slices/mapSlice';

import classes from './MapBlock.module.scss';

const MapBlock = () => {
  const mapLocation = useSelector(selectMapLocation);

  return (
    <div className={classes.MapBlock}>
      <h2 className={classes.title}>Посетите наши магазины</h2>
      <div className={classes.Wrapper}>
        <LocationList />
        <Map mapLocation={mapLocation} />
      </div>
    </div>
  );
};

export default MapBlock;
