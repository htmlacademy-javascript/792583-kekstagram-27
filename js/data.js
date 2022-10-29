import {
  getRandomPositiveInteger,
  getRandomArrayElement,
  createRandomIdFromRangeGenerator
  // generatePictureId,
  // generadeCommentId,
  // generatePicturePhoto,
} from './util.js';

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
const DESCRIPTIONS = [
  'Просто фото',
  'Тестирую новый iPhone 14 Pro Max',
  'Хотели бы оказаться на моем месте?:D',
  'Ловите очередной шедевр',
  'А ты смог бы снять лучше?',
  'Надо повторить',
  'Вот так вот.',
];
const COUNT_OBJECTS = 25;
const COUNT_MIN_INTEGER = 1;
const COUNT_MAX_INTEGER = 6;
const generateCommentAvatar = getRandomPositiveInteger(COUNT_MIN_INTEGER, COUNT_MAX_INTEGER);
const generatePictureId = createRandomIdFromRangeGenerator(COUNT_MIN_INTEGER, COUNT_OBJECTS);
const generadeCommentId = createRandomIdFromRangeGenerator(COUNT_MIN_INTEGER, 1000);
const generatePicturePhoto = createRandomIdFromRangeGenerator(COUNT_MIN_INTEGER, COUNT_OBJECTS);

const createComments = () => ({
  id: generadeCommentId(),
  avatar: `img/avatar-${getRandomPositiveInteger(COUNT_MIN_INTEGER, COUNT_MAX_INTEGER)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const getArrayComments = Array.from({ length: getRandomPositiveInteger(COUNT_MIN_INTEGER, COUNT_MAX_INTEGER) }, createComments);
const getRandomObject = (elem, number) => ({
  // id: generatePictureId(),
  id: number + 1,
  // url: `photos/${generatePicturePhoto()}.jpg`,
  url: `photos/${number + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from({ length: getRandomPositiveInteger(COUNT_MIN_INTEGER, COUNT_MAX_INTEGER) }, createComments),
});

const getArrayPictures = Array.from({ length: COUNT_OBJECTS }, getRandomObject);

export {
  getArrayPictures,
  COUNT_OBJECTS,
  getRandomPositiveInteger,
  getArrayComments,
};
