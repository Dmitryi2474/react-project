import React from 'react';
import Header from '../Header/Header';
import classes from '../../scss/app.module.scss';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className={classes.Wrapper}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
