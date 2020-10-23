const isQuantityValid = quantity => {
  // eslint-disable-next-line no-restricted-globals
  if (!isFinite(quantity)) return false;
  if (quantity < 0) return false;
  return true;
};

export default isQuantityValid;
