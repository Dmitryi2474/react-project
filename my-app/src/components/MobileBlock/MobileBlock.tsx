import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, selectCartItemById } from '../../redux/slices/cartSlice';

import '../ui/Button/Button';
import classes from './MobileBlock.module.scss';

const typeNames = ['128 GB', '512 GB'];

type MobileBlockProps = { id: string, title: string, price: number, imageUrl: string, types: string[], color: string[] }

const MobileBlock: React.FC<MobileBlockProps> = ({ id, title, price, imageUrl, types, color }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = useState(0);
  const [activeColor, setActiveColor] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      colors: color[activeColor],
    };
    dispatch(addItem(item));
  };

  return (
    <div className={classes.MobileBlockWrapper}>
      <div className={classes.MobileBlock}>
        <div className={classes.imgScale}>
          <Link to={`/mobile/${id}`}>
            <img className={classes.Image} src={imageUrl} alt="Mobile" />
            <h4 className={classes.Title}>{title}</h4>
          </Link>
        </div>
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
            {color.map((value, i) => (
              <li
                key={i}
                onClick={() => setActiveColor(i)}
                className={activeColor === i ? `${classes.active}` : ''}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.Bottom}>
          <div className={classes.Price}>{price} руб</div>
          <button
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileBlock;
