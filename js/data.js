import { getRandomPositiveInteger } from '/js/util.js';
import { getRandomArrayElement } from '/js/util.js';
import { generateCommentAvatar } from '/js/util.js';
import { generatePictureId } from '/js/util.js';
import { generadeCommentId } from '/js/util.js';
import { generatePicturePhoto } from '/js/util.js';

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

const createArrayComments = () =>
({
  id: generadeCommentId(),
  avatar: `img/avatar-${generateCommentAvatar()}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const getRandomObject = () => ({
  id: generatePictureId(),
  url: `photos/${generatePicturePhoto()}.jpg`,
  description: 'Кексограм одобряет',
  likes: getRandomPositiveInteger(15, 200),
  comments: createArrayComments(),
});

const similarPicture = Array.from({ length: COUNT_OBJECTS }, getRandomObject);

export { similarPicture };
export { COUNT_OBJECTS };
