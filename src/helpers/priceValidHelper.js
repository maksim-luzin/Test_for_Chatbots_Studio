const isPriceValid = price => {
  // eslint-disable-next-line no-restricted-globals
  if (!isFinite(price)) return false;
  if (price > 999999 || price < 0) return false;
  return true;
};

export default isPriceValid;
