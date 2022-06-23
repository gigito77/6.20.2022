"use strict";

var b = document.body;
var radio = document.querySelector("#radio");
var shadow = document.querySelector("#shadow");
var buttonCta = document.querySelector("#button-cta");
var cover = document.querySelector("#cover");
var circles = document.querySelector("#circles");
var a = document.querySelector("#audio");
var son = document.querySelector("#son");
var soff = document.querySelector("#soff");
/*******************/

var radioPlaying = function radioPlaying() {
  radio.classList.toggle('is-radio-active');
  shadow.classList.toggle('is-shadow-active');
  buttonCta.classList.toggle('is-button-active');
  cover.classList.toggle('is-cover-active'); // circles.classList.toggle('is-circle-active')

  a.loop = true;
  if (a.paused) a.play();else {
    a.pause();
    a.currentTime = 0;
  }
  son.classList.toggle("s");
  soff.classList.toggle("s");
};
/*******************/


buttonCta.addEventListener("click", radioPlaying);
soff.addEventListener("click", radioPlaying);
son.addEventListener("click", radioPlaying);
//# sourceMappingURL=main.dev.js.map
