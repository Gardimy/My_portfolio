/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable linebreak-style */
document.addEventListener('DOMContentLoaded', function () {
  const languagesList = document.querySelector('.languages-list');
  const arrowDown = document.querySelector('.arrow.down');

  // eslint-disable-next-line func-names, prefer-arrow-callback
  arrowDown.addEventListener('click', function () {
    languagesList.classList.toggle('show');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const frameworksList = document.querySelector('.languages-list');
  const arrowRight = document.querySelector('.arrow.right');

  arrowRight.addEventListener('click', function () {
    frameworksList.classList.toggle('show');
  });
});
