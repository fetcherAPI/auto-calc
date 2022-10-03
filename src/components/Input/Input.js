import React from "react";
import { useDispatch } from "react-redux";
import { corectValueSetter } from "../../utils/corectValueSetter";
import { numberWithSpaces } from "../../utils/numberWithSpaces";
import classes from "./Input.module.scss";

const Input = ({ title, value, setValue, symbol, valuePercent, maxValue }) => {
  const dispatch = useDispatch();

  const percentShower = (
    <>
      <input
        className={classes.percentBlock}
        onChange={(e) =>
          dispatch(setValue(corectValueSetter(e.target.value, maxValue)))
        }
        value={`${valuePercent}`}
      />
      <div className={classes.percentIcon}>%</div>
    </>
  );

  value = numberWithSpaces(value);
  return (
    <div className={classes.box}>
      <p>{title}</p>
      <div className={classes.wrapper}>
        <input
          type='text'
          pattern='[a-z]{1,15}'
          value={!symbol ? `${value}₽` : value}
          onChange={(e) =>
            dispatch(setValue(corectValueSetter(e.target.value, maxValue)))
          }
        />
        {!symbol ? percentShower : <p>{symbol}</p>}
      </div>
    </div>
  );
};

export default Input;
