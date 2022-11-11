import React from "react";

import classes from "./GridBlock.module.scss";

const GridBlock = ({ children }) => {
  return <div className={classes.Container}>{children}</div>;
};

export default GridBlock;