// Фикс для высоты герой-секции
    function setHeroHeight() {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      document.querySelector('.hero-content').style.paddingTop = navbarHeight + 'px';
      document.querySelector('.hero-section').style.height = `calc(100vh - ${navbarHeight}px)`;
    }
    
    window.addEventListener('load', setHeroHeight);
    window.addEventListener('resize', setHeroHeight);

    
// Прокрутка галереи
// Слайдер галереи
const track = document.getElementById('galleryTrack');
const prevBtn = document.querySelector('.gallery-prev');
const nextBtn = document.querySelector('.gallery-next');
const slides = document.querySelectorAll('.gallery-slide');
const slideWidth = slides[0].offsetWidth + 15; // Ширина + отступ
let currentPosition = 0;

// Прокрутка вперёд
nextBtn.addEventListener('click', () => {
  if (currentPosition > -(slideWidth * (slides.length - 5))) {
    currentPosition -= slideWidth;
    track.style.transform = `translateX(${currentPosition}px)`;
  }
});

// Прокрутка назад
prevBtn.addEventListener('click', () => {
  if (currentPosition < 0) {
    currentPosition += slideWidth;
    track.style.transform = `translateX(${currentPosition}px)`;
  }
});

// Анимация при скролле
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-card, .review-card, .about-content');
  elements.forEach(el => {
    const elPosition = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if (elPosition < screenPosition) {
      el.classList.add('animate');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);