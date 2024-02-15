"use strict";

function delay(milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), milliseconds);
  });
}

const body = document.querySelector("body");
async function changeBackgroundColor() {
  await delay(5000);
  body.style.backgroundColor = "cornflowerblue";
  await delay(5000);
  body.style.backgroundColor = "indianred";
  await delay(5000);
  body.style.backgroundColor = "lightgreen";
}
changeBackgroundColor();
