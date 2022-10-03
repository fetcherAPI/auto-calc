import React from "react";
import classes from "./InformationBlock.module.scss";

const InformationBlock = ({ children }) => {
  return <div className={classes.priceInfo}>{children}</div>;
};

export default InformationBlock;
