//мобильнок бургер меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.header__nav-link');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
});
navLinks.forEach((item) => {
  item.addEventListener('click', (e) => {
    // e.preventDefault();
    burger.classList.toggle('active');
    nav.classList.toggle('open');
  });
});

//Плавный скролл к якорю
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});


