// const hidden = document.querySelector('.big-picture');
// hidden.classList.remove('hidden');
const commentContainer = document.querySelector('.social__comment');
console.log(commentContainer);
const commentFragment = document.createDocumentFragment();
getArrayPictures.forEach(({ url, likes, comments }) => {
  const commentElement = commentContainer.cloneNode(true);
  commentElement.querySelector('.big-picture__img').setAttribute('src', url);
  commentElement.querySelector('.likes-count').textContent = likes;
  commentElement.querySelector('.comments-count').textContent = comments.length;
  commentFragment.appendChild(commentElement);
  console.log(commentFragment);
});


const btnCancel = document.querySelector('.big-picture_cancel');
// btnCancel.onclick = function {
//   hidden.classList.add('hidden');
// };
