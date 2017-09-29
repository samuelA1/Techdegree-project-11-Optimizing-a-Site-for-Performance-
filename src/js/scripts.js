const lazyModals = document.getElementsByClassName('mod');
const photo4 = document.getElementById('photo4');
const photo5 = document.getElementById('photo5');
const photo6 = document.getElementById('photo6');
const photo7 = document.getElementById('photo7');
const photo8 = document.getElementById('photo8');
const photo9 = document.getElementById('photo9');

function lazyModal_1() {
      lazyModals[0].classList.add('loaded');
      lazyModals[0].setAttribute('src', 'img/photos/photo1-lg.jpg');
      lazyModals[0].setAttribute('data-was-processed', "true");
    }

function lazyModal_2() {
      lazyModals[1].classList.add('loaded');
      lazyModals[1].setAttribute('src', 'img/photos/photo2-lg.jpg');
      lazyModals[1].setAttribute('data-was-processed', "true");
    }

function lazyModal_3() {
      lazyModals[2].classList.add('loaded');
      lazyModals[2].setAttribute('src', 'img/photos/photo3-lg.jpg');
      lazyModals[2].setAttribute('data-was-processed', "true");
    }

function lazyModal_4() {
      lazyModals[3].classList.add('loaded');
      lazyModals[3].setAttribute('src', 'img/photos/photo4-lg.jpg');
      lazyModals[3].setAttribute('data-was-processed', "true");
    }

function lazyModal_5() {
      lazyModals[4].classList.add('loaded');
      lazyModals[4].setAttribute('src', 'img/photos/photo5-lg.jpg');
      lazyModals[4].setAttribute('data-was-processed', "true");
    }

function lazyModal_6() {
      lazyModals[5].classList.add('loaded');
      lazyModals[5].setAttribute('src', 'img/photos/photo6-lg.jpg');
      lazyModals[5].setAttribute('data-was-processed', "true");
    }

function lazyModal_7() {
      lazyModals[6].classList.add('loaded');
      lazyModals[6].setAttribute('src', 'img/photos/photo7-lg.jpg');
      lazyModals[6].setAttribute('data-was-processed', "true");
    }

function lazyModal_8() {
      lazyModals[7].classList.add('loaded');
      lazyModals[7].setAttribute('src', 'img/photos/photo8-lg.jpg');
      lazyModals[7].setAttribute('data-was-processed', "true");
    }

function lazyModal_9() {
      lazyModals[8].classList.add('loaded');
      lazyModals[8].setAttribute('src', 'img/photos/photo9-lg.jpg');
      lazyModals[8].setAttribute('data-was-processed', "true");
    }

    document.addEventListener('scroll', function() {
      photo4.setAttribute('src', 'img/photos/photo4-sm.jpg');
      photo5.setAttribute('src', 'img/photos/photo5-sm.jpg');
      photo6.setAttribute('src', 'img/photos/photo6-sm.jpg');
      photo7.setAttribute('src', 'img/photos/photo7-sm.jpg');
      photo8.setAttribute('src', 'img/photos/photo8-sm.jpg');
      photo9.setAttribute('src', 'img/photos/photo9-sm.jpg');
    });
