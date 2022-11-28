import { useState } from "react";

import classes from "./LocationItem.module.scss";

const LocationItem = ({ data, locationHandler }) => {
  const [active, setActive] = useState(false);
  const clickHandler = (data) => {
    locationHandler(data.mapLocation);
    setActive(!active);
  };

  return (
    <li
      onClick={() => clickHandler(data)}
      className={active ? classes.Item + ' active' : classes.Item}
    >
      <h3 className={classes.Title}>{data.city}</h3>
      <span className={classes.itemAddress}>{data.address}</span>
      <span className={classes.Phone}>{data.Phone}</span>
      <span className={classes.Hours}>{data.hours}</span>
    </li>
  );
};

export default LocationItem;
