const clockTitle = document.querySelector(".js-clock");
const christmasDate = new Date(2021, 11, 25, 00, 00, 00);
//new Date() method에서 month는 0부터 시작하므로 12가 아닌 12-1 입력

function christmasClock() {
  const todayDate = new Date();
  const gap = christmasDate - todayDate;
  const remainD = String(Math.floor(gap / (1000 * 60 * 60 * 24)));
  const remainH = String(
    Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const remainM = String(
    Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const remainS = String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );
  //gap으로 주어진 시간은 ms 단위이므로 d, h, m , s 각각 구하기 위해서 ms, second, min, hour 단위 곱하기

  clockTitle.innerText = `${remainD}d ${remainH}h ${remainM}m ${remainS}s`;
}

christmasClock();
setInterval(christmasClock, 1000);
