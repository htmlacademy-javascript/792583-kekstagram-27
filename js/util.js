// import { COUNT_OBJECTS } from '/js/data.js';
const COUNT_OBJECTS = 25;

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// const checkMaxStringLength = (string, maxLength) => {
//   if (string.length < maxLength) {
//     return true;
//   } else {
//     return false;
//   }
// };
function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${min} до ${max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateCommentAvatar = createRandomIdFromRangeGenerator(1, COUNT_OBJECTS);
const generatePictureId = createRandomIdFromRangeGenerator(1, COUNT_OBJECTS);
const generadeCommentId = createRandomIdFromRangeGenerator(1, COUNT_OBJECTS);
const generatePicturePhoto = createRandomIdFromRangeGenerator(1, COUNT_OBJECTS);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export { getRandomArrayElement };
export { getRandomPositiveInteger };
export { generateCommentAvatar };
export { generatePictureId };
export { generadeCommentId };
export { generatePicturePhoto };
