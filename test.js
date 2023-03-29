"use strict";
let bird;
const canva = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
setInterval(startGame, 50);

function birdHight(sign, power) {
  const rect = bird.getBoundingClientRect();
  bird.style.top = rect.top + power * sign + "px";
}

const image = document.getElementById("bird");

const ctx = canva.getContext("2d");
image.addEventListener("load", (e) => {
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(image, 50, 50, 50, 50);
});

// const imgFly = () => (image.src = "img/bird-up.png");
function imgFly(src = "img/bird-up.png") {
  ctx.clearRect(50, 50, 50, 50);
  image.src = src;
  // const ctx = canva.getContext("2d");
  // image.addEventListener("load", (e) => {
  //   ctx.drawImage(image, 100, 100, 25, 25);
  // });
}

function startGame() {
  birdHight(1, 5);
  document.body.onkeyup = function (e) {
    if (e.code === "Space") {
      birdHight(-1, 60);
      // image.src = "img/bird-down.png";
      imgFly("img/bird-down.png");
      setTimeout(imgFly, 150);
    }
  };
}

// const ctx = canva.getContext("2d");
// ctx.fillStyle = "green";
// ctx.fillRect(20, 10, 50, 50);
