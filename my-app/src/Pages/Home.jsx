import React from 'react';
import { useEffect, useState, useContext } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCategotyId } from '../redux/slices/filterSlice';

import { SearchContext } from '../App';

import Categories from '../components/Categories/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton/Skeleton';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sort from '../components/Sort/Sort';

import classes from '../scss/app.module.scss';
import Pagination from '../components/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const [items, setItems] = useState([]);
  const { searchValue } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategotyId(id));
  };

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'возрастанию' : 'убыванию';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://6363c19237f2167d6f828690.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <div>
      <div className={classes.Top}>
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className={classes.Title}>Все пиццы</h2>
      <div className={classes.Items}>
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
