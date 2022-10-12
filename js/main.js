const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Александр',
  'Виктория',
  'Владимир',
  'Анастасия',
  'Игорь',
  'Женя',
  'Сергей',
  'Светлана',
  'Владислав',
];
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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createArrayComments = () =>
({
  id: getRandomPositiveInteger(1, 25),
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const getRandomObject = () => ({
  id: getRandomPositiveInteger(1, 25),
  url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
  description: 'Кекстограм одобряет',
  likes: getRandomPositiveInteger(15, 200),
  comments: createArrayComments(),
});

const similarPicture = Array.from({ length: COUNT_OBJECTS }, getRandomObject);

// eslint-disable-next-line no-console
console.log(similarPicture);
