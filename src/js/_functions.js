// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
import GraphModal from 'graph-modal';
// document.querySelector('.btn-search').addEventListener('click', () => {
// 	new GraphModal().open('search');
// });
// document.querySelector('.btn-sidebar').addEventListener('click', () => {
// 	new GraphModal().open('articles');
// });

  const modal = new GraphModal('search');
  const modal2 = new GraphModal('articles');



// Реализация табов
import GraphTabs from 'graph-tabs';
const currentUrl = window.location.href;
const isProfilePage = currentUrl.split(/[\/#]+/).find((item)=>item==='article.html');
if(isProfilePage&& isProfilePage.length > 0) {
const tabs = new GraphTabs('tab');
const tabs2 = new GraphTabs('tab2');
}


// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(popperBtn[0], popper[0], {
//   placement: 'right'
// });
//Тултипы
import tippy from 'tippy.js';
const content = `
Лиофилиза́ция — способ мягкой сушки веществ, при котором
высушиваемый препарат замораживается, а потом помещается в
вакуумную камеру.
`
tippy('.tooltip-btn', {
  content: content,
  allowHTML: true,
  theme: 'light',
  animation: 'fade',
  duration: [100, 200],
  placement: 'bottom',
});
// Подключение свайпера
import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const swiper = new Swiper('.mySwiper', {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: '#video-next',
    prevEl: '#video-prev',
  },
});
const swiper2 = new Swiper('.mySwiper2', {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: '#audio-next',
    prevEl: '#audio-prev',
  },
});
const swiper3 = new Swiper(".mySwiper-grid", {
  slidesPerView: 1,
  navigation: {
    nextEl: '#article-next',
    prevEl: '#article-prev',
  },
});

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);
