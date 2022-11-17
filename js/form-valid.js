const MIN_AMOUNT_TEXT = 20;
const MAX_AMOUNT_TEXT = 140;

const orderForm = document.querySelector('.img-upload__form');
const btnFormSend = document.querySelector('#upload-submit');
const textArea = document.querySelector('.text__description');

const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

textArea.addEventListener('input', () => {
  if (textArea.value.length >= MIN_AMOUNT_TEXT && textArea.value.length <= MAX_AMOUNT_TEXT) {
    btnFormSend.disabled = false;
  } else {
    btnFormSend.disabled = true;
  }
});

