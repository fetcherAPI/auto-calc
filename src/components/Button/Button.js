import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../redux/slices/inputDataSlice";
import classes from "./Button.module.scss";

const Button = ({ children }) => {
  const {
    costOfTheCar,
    initialPaymentPercent,
    leaseTerm,
    initialPaymentAmount,
    perMonthPay,
    totalAmountLease,
  } = useSelector((state) => state.inputDataSlice);
  const dispatch = useDispatch();
  return (
    <button
      className={classes.btn}
      onClick={() => {
        dispatch(
          postData({
            costOfTheCar,
            initialPaymentPercent,
            leaseTerm,
            initialPaymentAmount,
            perMonthPay,
            totalAmountLease,
          })
        );
      }}
    >
      {children}
    </button>
  );
};

export default Button;
