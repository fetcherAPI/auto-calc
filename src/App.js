import Input from "./components/Input/Input";
import * as constans from "./constans/constants";
import classes from "./App.module.scss";
import InformationBlock from "./components/inforamtionBlock";
import Button from "./components/Button";
import Range from "./components/Range/Range";
import { useDispatch, useSelector } from "react-redux";
import {
  setCostOfTheCar,
  setInitialPaymentPercent,
  setLeaseTerm,
  setInitialPaymentAmount,
  setPerMonthPay,
  setTotalAmountLease,
} from "./redux/slices/inputDataSlice";
import { percentCalculate } from "./utils/percentCalculate";
import { perMonthPayFunc } from "./utils/perMonthPay";
import { numberWithSpaces } from "./utils/numberWithSpaces";
import { totalCountOfLease } from "./totalAmountOflease";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  const {
    costOfTheCar,
    initialPaymentPercent,
    leaseTerm,
    initialPaymentAmount,
    perMonthPay,
    totalAmountLease,
  } = useSelector((state) => state.inputDataSlice);
  useEffect(() => {
    dispatch(
      setInitialPaymentAmount(
        percentCalculate(costOfTheCar, initialPaymentPercent)
      )
    );

    dispatch(
      setPerMonthPay(
        perMonthPayFunc(costOfTheCar, initialPaymentAmount, leaseTerm)
      )
    );

    dispatch(
      setTotalAmountLease(
        totalCountOfLease(initialPaymentAmount, leaseTerm, perMonthPay)
      )
    );
  }, [costOfTheCar, initialPaymentPercent, leaseTerm]);

  return (
    <div className={classes.generalWrapper}>
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      <div className={classes.inputsWrapper}>
        <div className={classes.wrapper}>
          <Input
            title='Стоимость автомобиля'
            maxValue={constans.MAX_CAR_PRICE}
            value={costOfTheCar}
            setValue={setCostOfTheCar}
            symbol={"₽"}
          />
          <Range
            value={costOfTheCar}
            limits={[constans.MAX_CAR_PRICE, constans.MIN_CAR_PRICE]}
            setValue={setCostOfTheCar}
          />
        </div>

        <div className={classes.wrapper}>
          <Input
            title='Первоначальный взноз'
            maxValue={constans.MAX_FIRST_MONEY}
            valuePercent={initialPaymentPercent}
            value={initialPaymentAmount}
            setValue={setInitialPaymentPercent}
          />
          <Range
            value={initialPaymentPercent}
            limits={[constans.MAX_FIRST_MONEY, constans.MIN_FIRST_MONEY]}
            setValue={setInitialPaymentPercent}
          />
        </div>

        <div className={classes.wrapper}>
          <Input
            title='Срок лизинга'
            maxValue={constans.MAX_LIZING_MONTH}
            value={leaseTerm}
            setValue={setLeaseTerm}
            symbol={"мес"}
          />
          <Range
            value={leaseTerm}
            limits={[constans.MAX_LIZING_MONTH, constans.MIN_LIZING_MONTH]}
            setValue={setLeaseTerm}
          />
        </div>
      </div>

      <div className={classes.informationsWrapper}>
        <InformationBlock>
          <p>Сумма договора лизинга</p>
          <h2>{`${numberWithSpaces(totalAmountLease)} ₽`}</h2>
        </InformationBlock>

        <InformationBlock>
          <p>Ежемесячный платеж от</p>
          <h2>{`${numberWithSpaces(perMonthPay)} ₽`}</h2>
        </InformationBlock>

        <InformationBlock>
          <Button>Оставить заявку</Button>
        </InformationBlock>
      </div>
    </div>
  );
};

export default App;
