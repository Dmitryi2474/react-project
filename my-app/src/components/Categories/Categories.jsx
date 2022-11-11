import React from 'react';

import classes from './Categories.module.scss';

const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Зактрытые',
  ];

  return (
    <div className={classes.Categories}>
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? `${classes.active}` : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
