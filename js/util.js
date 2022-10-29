// const COUNT_OBJECTS = 25;

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

// const generateCommentAvatar = getRandomPositiveInteger(1, 6);
// const generatePictureId = createRandomIdFromRangeGenerator(1, COUNT_OBJECTS);
// const generadeCommentId = createRandomIdFromRangeGenerator(1, 1000);
// const generatePicturePhoto = createRandomIdFromRangeGenerator(1, COUNT_OBJECTS);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

export {
  getRandomArrayElement,
  getRandomPositiveInteger,
  // generateCommentAvatar,
  // generatePictureId,
  // generadeCommentId,
  // generatePicturePhoto,
  isEscapeKey,
  isEnterKey,
  createRandomIdFromRangeGenerator
};

