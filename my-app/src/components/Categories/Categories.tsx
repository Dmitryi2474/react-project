import React from 'react';

import classes from './Categories.module.scss';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void
}

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  const categories = [
    'Все',
    'Iphone',
    'Samsung',
    'Xiaomi',
    'Honor',
    'HUAWEI',
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
