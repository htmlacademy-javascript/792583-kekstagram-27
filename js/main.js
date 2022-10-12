const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
getRandomPositiveInteger();

const checkMaxStringLength = (string, maxLength) => {
  if (string.length < maxLength) {
    return true;
  } else {
    return false;
  }
};
checkMaxStringLength();
