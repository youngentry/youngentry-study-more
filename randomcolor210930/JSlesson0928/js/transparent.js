const transparentBtn = document.querySelector("#transparent-all");
const main = document.querySelector("#all-elements");
const resetTransparentBtn = document.querySelector("#reset-trans-btn");
const changeTransBgBtn = document.querySelector("#change-bg-btn");

const NONE = "none";
const BLOCK = "block";

function handleClickTransparent(event) {
  event.preventDefault();
  main.style.display = NONE;
  resetTransparentBtn.style.display = BLOCK;
  changeTransBgBtn.style.display = BLOCK;
}

transparentBtn.addEventListener("click", handleClickTransparent);

function handleClickResetTransparent(event) {
  event.preventDefault();
  main.style.display = BLOCK;
  resetTransparentBtn.style.display = NONE;
  changeTransBgBtn.style.display = NONE;
}
resetTransparentBtn.addEventListener("click", handleClickResetTransparent);
