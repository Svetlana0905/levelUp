import {
  nextBtnSwiper, prevBtnSwiper, minutes,
  seconds,
  countdown,
  preloader,
} from './helpers/elementsNodeList'

import AOS from 'aos';
import { isWebp, findVideos } from './modules'

import Swiper, { Navigation } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: nextBtnSwiper,
    prevEl: prevBtnSwiper
  },
  speed: 1000,
  loop: true,
})


let date = new Date();
const nextTime = date.setMinutes(date.getMinutes() + 30);

function updateCounter() {
  const currentTime = new Date();
  let diff = nextTime - currentTime;

  // Минут всего, далее остаток от преобразования в часы, минут осталось
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  // Секундк всего, далее остаток от преобразования в минуты, секунд осталось
  const secondsLeft = Math.floor(diff / 1000) % 60;

  minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
  if (diff <= 1) {
    clearInterval(interval)
    clearTimeout(timeout)
  }

}

let interval = setInterval(updateCounter, 1000);

let timeout = setTimeout(function () {
  preloader.remove();
  countdown.style.display = 'flex';
}, 1000);


window['FLS'] = true

isWebp();

AOS.init();

findVideos()

