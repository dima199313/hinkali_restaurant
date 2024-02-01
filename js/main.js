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


//modal popup
const btns = document.querySelectorAll('*[data-modal-btn]')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.close_modal_window')
console.log(btns)
btns.forEach((item)=>{
  item.addEventListener('click',()=>{
    modal.classList.toggle('visible')
    closeModalBtn.addEventListener('click',()=>{
      modal.classList.remove('visible')
    })
  })
})
window.addEventListener('click',(event)=>{
  if(event.target === modal){
    modal.classList.remove('visible')
  }
})



//Плавный скролл к якорю
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});


