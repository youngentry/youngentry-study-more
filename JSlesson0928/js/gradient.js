const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];
const gradientBtn = document.querySelector(".gradient-btn");
let columns = document.querySelectorAll(".column");

function handleBtnClick(event) {
  event.preventDefault();

  const randomColorStarts = colors[Math.floor(Math.random() * colors.length)];
  const randomColorEnds = colors[Math.floor(Math.random() * colors.length)];

  for (let column of columns) {
    column.style.background = `linear-gradient(135deg, ${randomColorStarts}, ${randomColorEnds})`;
  }
}

gradientBtn.addEventListener("click", handleBtnClick);

const resetColorBtn = document.querySelector(".gradient-reset");

function handleBtnReset(event) {
  event.preventDefault();
  const columns = document.querySelectorAll(".column");
  for (let column of columns) {
    column.removeAttribute("style");
  }
}

resetColorBtn.addEventListener("click", handleBtnReset);
