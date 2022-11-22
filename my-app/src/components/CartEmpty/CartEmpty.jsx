import React from 'react';
import classes from './CartEmpty.module.scss';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className={classes.cart}>
      <h2>в данные момент ваша корзина пустая</h2>
      <Link to="/">
        <button className="button button--cart">
          <span>выберите продукт</span>
        </button>
      </Link>
      <img src="../img/empty-cart.png" alt="" />
    </div>
  );
};

export default CartEmpty;
