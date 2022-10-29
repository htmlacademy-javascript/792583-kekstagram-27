import { getArrayPictures, getArrayComments } from '/js/data.js';
import { picturesContainer } from './main-screen-small-photos.js';
import './fullscreen-photo.js';
import './user-modal.js';
import './form-valid.js';


// eslint-disable-next-line no-console
//фотки отображает и все!
console.log(getArrayPictures);
const photos = getArrayPictures.map(({ url }) => (url));
const descriptions = getArrayPictures.map(({ description }) => (description));
const likes = getArrayPictures.map(({ likes }) => (likes));
const comments = getArrayPictures.map(({ comments }) => (comments));

let thumbnails = document.querySelectorAll('.picture__img');
let fullPhoto = document.querySelector('.big-picture__img').querySelector('img');
let photoDisc = document.querySelector('.social__caption');
let photoLikes = document.querySelector('.likes-count');
let photoComments = document.querySelector('.social__comments');

let addThumbnailClickHandler = function (thumbnail, photo, description, like, comment) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
    photoDisc.textContent = description;
    photoLikes.textContent = like;
    photoComments.append === comment;
    console.log(comment);
  });
};
for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i], descriptions[i], likes[i], comments[i]);
}
//////////////////////////work
// const photos = getArrayPictures.map(({ url }) => (url));

// let thumbnails = document.querySelectorAll('.picture__img');
// let fullPhoto = document.querySelector('.big-picture__img').querySelector('img');
// let addThumbnailClickHandler = function (thumbnail, photo) {
//   thumbnail.addEventListener('click', function () {
//     fullPhoto.src = photo;
//   });
// };

// for (let i = 0; i < thumbnails.length; i++) {
//   addThumbnailClickHandler(thumbnails[i], photos[i]);
// }
