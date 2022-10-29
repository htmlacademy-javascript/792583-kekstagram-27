// const hidden = document.querySelector('.big-picture');
import { getArrayPictures, getArrayComments } from './data.js';

const hidden = document.querySelector('.big-picture');
const pictures = document.querySelectorAll('.picture__img');
const btnCancel = document.querySelector('.big-picture__cancel');
const documentBody = document.querySelector('body');
const blockCountComment = document.querySelector('.social__comment-count');
const blockCommentLoader = document.querySelector('.comments-loader');

for (const picture of pictures) {

  picture.addEventListener('click', () => {
    hidden.classList.remove('hidden');
    documentBody.classList.add('modal-open');
    blockCountComment.classList.add('hidden');
    blockCommentLoader.classList.add('hidden');

    const pictureImage = document.querySelector('.big-picture__img').querySelector('img');
    getArrayPictures.forEach(({ url, likes, comments, description }) => {
      pictureImage.setAttribute('src', url);
      pictureImage.setAttribute('alt', description);
      document.querySelector('.likes-count').textContent = likes;
      document.querySelector('.social__caption').textContent = description;
      document.querySelector('.comments-count').textContent = comments.length;

    });
  });
}
//Закрывает окно
btnCancel.addEventListener('click', () => {
  hidden.classList.add('hidden');
  documentBody.classList.remove('modal-open');
});
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hidden.classList.add('hidden');
    documentBody.classList.remove('modal-open');
  }
});
//Список комментариев под фотографией: комментарии вставляются в блок .social__comments
const socialComments = document.querySelector('.social__comments');
const socialCommentBlock = document.querySelector('.social__comment');
const commentsListFragment = document.createDocumentFragment();

getArrayComments.forEach(({ name, avatar, message }) => {
  const comment = socialCommentBlock.cloneNode(true);
  comment.querySelector('img').setAttribute('src', avatar);
  comment.querySelector('img').setAttribute('alt', name);
  comment.querySelector('p').textContent = message;
  commentsListFragment.appendChild(comment);

});
socialComments.appendChild(commentsListFragment);

