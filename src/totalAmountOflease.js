export const totalCountOfLease = (firstPayment, leaseMonth, perMonthPay) => {
  return Math.round(+firstPayment + +leaseMonth * +perMonthPay);
};
