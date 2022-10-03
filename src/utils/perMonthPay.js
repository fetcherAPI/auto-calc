export const perMonthPayFunc = (price, initial, months) => {
  return Math.round(
    (+price - +initial) *
      ((0.035 * Math.pow(1 + 0.035, +months)) /
        (Math.pow(1 + 0.035, +months) - 1))
  );
};
