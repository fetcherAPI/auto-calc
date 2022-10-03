export const getBackgroundSize = (value, maxValue) => {
  return { backgroundSize: `${(+value * 100) / +maxValue}% 100%` };
};
