const navPage = document.querySelector('.nav-page');
const navToggle = document.querySelector('.nav-page__toggle');

navPage.classList.remove('nav-page--nojs');
navPage.classList.add('nav-page--closed');
navPage.classList.remove('nav-page--opened');

navToggle.addEventListener('click', () => {
  navPage.classList.toggle('nav-page--closed');
  navPage.classList.toggle('nav-page--opened');
});
