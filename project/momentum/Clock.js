const clockElement = document.querySelector(".clock");
const clockDisplayElement = clockElement.querySelector(".clockDisplay");

function getCurrentTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  return `${decorateNumber(hours)}:${decorateNumber(minutes)}:${decorateNumber(
    seconds
  )}`;
}

function decorateNumber(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}
funcTest();
function displayTime() {
  clockDisplayElement.textContent = getCurrentTime();
}

function init() {
  displayTime();
  setInterval(displayTime, 1000);
}

init();
