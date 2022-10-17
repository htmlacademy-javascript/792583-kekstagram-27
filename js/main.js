import { getArrayPictures } from '/js/data.js';
import { picturesContainer } from './show-photos.js';
// import './fullscreen-photo.js';

// eslint-disable-next-line no-console
console.log(getArrayPictures);
// eslint-disable-next-line no-console
// console.log(picturesContainer);
//1
//2
const hidden = document.querySelector('.big-picture');
const pictures = document.querySelectorAll('.picture__img');
const btnCancel = document.querySelector('.big-picture__cancel');
const documentBody = document.querySelector('body');
const commentContainer = document.querySelector('.social__comment');

for (let picture of pictures) {

  picture.addEventListener('click', () => {
    hidden.classList.remove('hidden');
    documentBody.classList.add('modal-open');

    getArrayPictures.forEach(({ url, likes, comments }) => {
      // const commentElement = commentContainer.cloneNode(true);
      picture.querySelector('.big-picture__img').setAttribute('src', url);
      picture.querySelector('.likes-count').textContent = likes;
      picture.querySelector('.comments-count').textContent = comments.length;
      // commentFragment.appendChild(commentElement);
    });
  });
}

btnCancel.addEventListener('click', () => {
  hidden.classList.add('hidden');
  documentBody.classList.remove('modal-open');
});
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hidden.classList.add('hidden');
  }
});
// //2//1-
// const bigPictureContainer = document.querySelector('.big-picture__img');
// const bigPictureImg = bigPictureContainer.querySelector('img');
// getArrayPictures.forEach(({ url, likes, comments }) => {
//   bigPictureImg.querySelector('.big-picture__img').setAttribute('src', url);
//   document.querySelector('.likes-count').textContent = likes;
//   document.querySelector('.comments-count').textContent = comments.length;
// });
