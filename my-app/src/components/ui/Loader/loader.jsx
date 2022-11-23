import React from 'react';

import classes from './loader.module.scss';

const Loading = () => {
  return (
    <section className={classes.loader}>
      <div className={classes.Wrapper}>
        <div className={classes.Loader}></div>
      </div>
    </section>
  );
};

export default Loading;
