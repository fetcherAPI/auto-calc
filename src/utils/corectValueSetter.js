export const corectValueSetter = (value, maxValue) => {
  console.log("maxValue", maxValue);
  if (maxValue < value) {
    alert(`Не должен превышать ${maxValue}`);
    return maxValue;
  } else {
    return value;
  }
};
