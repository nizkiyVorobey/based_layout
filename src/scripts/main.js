'use strict';

const burgerIcon = document.getElementsByClassName('burger-icon')[0];
const nav = document.getElementsByClassName('header__nav')[0];

burgerIcon.onclick = function(e) {
  if (nav.classList.contains('nav-burger')) {
    nav.classList.remove('nav-burger');
    burgerIcon.classList.remove('change');
  } else {
    nav.classList.add('nav-burger');
    burgerIcon.classList.add('change');
  }
};
