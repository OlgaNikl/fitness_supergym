// import Swiper, {Navigation} from '../../vendor/swiper';
// Swiper.use([Navigation]);

// const initSwiper = new Swiper ()

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
const swiperTeam = document.querySelector('.coaches__slider');

export const initSwiperTeam = () => {
  if (swiperTeam) {
    (() =>
      new Swiper('.coaches__slider', { // eslint-disable-line
        direction: 'horizontal',
        loop: true,

        navigation: {
          nextEl: '.coaches__button--next',
          prevEl: '.coaches__button--prev',
        },

        // breakpoints: {
        //   1200: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //     initialSlide: 0,
        //   },
        // },
      })
    )();
  }
};
