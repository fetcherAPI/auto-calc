import React from "react";
import { useDispatch } from "react-redux";
import { getBackgroundSize } from "../../utils/getBackgroundSize";
import classes from "./Range.module.scss";

const Range = ({ value, limits, setValue }) => {
  const dispatch = useDispatch();
  return (
    <input
      className={classes.range}
      type='range'
      min={limits[1]}
      max={limits[0]}
      value={value}
      onChange={(e) => dispatch(setValue(e.target.value))}
      style={getBackgroundSize(value, limits[0])}
    />
  );
};

export default Range;
