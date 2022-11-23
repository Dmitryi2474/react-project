import React from 'react';
import debounce from 'lodash.debounce';
import { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import { useLocation } from 'react-router';

import classes from './Search.module.scss';
import { useState } from 'react';

const Search = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div>
      {pathname !== '/cart' && (
        <div className={classes.root}>
          <svg
            className={classes.icon}
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 50 50"
            height="50px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 50 50"
            width="50px"
          >
            <rect fill="none" height="50" width="50" />
            <circle
              cx="21"
              cy="20"
              fill="none"
              r="16"
              stroke="#000000"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              fill="none"
              stroke="#000000"
              strokeMiterlimit="10"
              strokeWidth="4"
              x1="32.229"
              x2="45.5"
              y1="32.229"
              y2="45.5"
            />
          </svg>
          <input
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
            className={classes.input}
            placeholder="Поиск по названию..."
          />
          {value && (
            <svg
              onClick={() => onClickClear('')}
              className={classes.clear}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
            >
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
