import {
  getRandomPositiveInteger,
  getRandomArrayElement,
  generatePictureId,
  generadeCommentId,
  generatePicturePhoto,
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

const createComments = () => ({
  id: generadeCommentId(),
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const getArrayComments = Array.from({ length: getRandomPositiveInteger(1, 6) }, createComments);
const getRandomObject = () => ({
  id: generatePictureId(),
  url: `photos/${generatePicturePhoto()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from({ length: getRandomPositiveInteger(1, 6) }, createComments),
});

const getArrayPictures = Array.from({ length: COUNT_OBJECTS }, getRandomObject);

export {
  getArrayPictures,
  COUNT_OBJECTS,
  getRandomPositiveInteger,
  getArrayComments,
};
