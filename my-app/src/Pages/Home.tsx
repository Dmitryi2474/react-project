import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useCallback } from 'react';

import {
  setCategotyId,
  setCurrentPage,
  setFliters,
  slectetFilter,
} from '../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMobile, slectetMobile } from '../redux/slices/mobileSlice';

import Sort, { sortList } from '../components/Sort/Sort';
import Categories from '../components/Categories/Categories';
import Skeleton from '../components/MobileBlock/Skeleton/Skeleton';
import MobileBlock from '../components/MobileBlock/MobileBlock';
import Pagination from '../components/Pagination';

import classes from '../scss/app.module.scss';
import MapBlock from '../components/MapBlock/MapBlock';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(slectetFilter);
  const sortType = sort.sortProperty;

  const { items, status } = useSelector(slectetMobile);

  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategotyId(idx));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getMobile = async () => {
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'возрастанию' : 'убыванию';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      //@ts-ignore
      fetchMobile({
        sortBy,
        order,
        category,
        search,
        currentPage,
      })
    );
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort.sortProperty, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(
        setFliters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMobile();
    isSearch.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const skeleton = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const mobileBlock = items.map((obj: any) => <MobileBlock key={obj.id} {...obj} />);

  return (
    <div>
      <div className={classes.Top}>
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className={classes.Title}>Все смартфоны</h2>
      {status === 'error' ? (
        <div className={classes.Error}>
          <h2>что-то пошло не так((</h2>
          <span>попробуйте повторить попытку позже</span>
        </div>
      ) : (

        <div className={classes.Items}>
            {status === 'loading' ? skeleton : mobileBlock}
        </div>

      )
      }
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      <MapBlock />
    </div >
  );
};

export default Home;
