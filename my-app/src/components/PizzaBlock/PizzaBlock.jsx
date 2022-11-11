import React from 'react';
import { useState } from 'react';
import Button from '../ui/Button/Button';

import classes from './PizzaBlock.module.scss';

const PizzaBlock = ({ title, price, imageUrl, types, sizes }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  return (
    <div className={classes.PizzaBlockWrapper}>
      <div className={classes.PizzaBlock}>
        <img className={classes.Image} src={imageUrl} alt="Pizza" />
        <h4 className={classes.Title}>{title}</h4>
        <div className={classes.Selector}>
          <ul>
            {types.map((value, i) => (
              <li
                key={i}
                onClick={() => setActiveType(i)}
                className={activeType === i ? `${classes.active}` : ''}
              >
                {value}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((value, i) => (
              <li
                key={i}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? `${classes.active}` : ''}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.Bottom}>
          <div className={classes.Price}>от {price} руб</div>
          <Button text={'добавить'} />
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
