const clock = document.querySelector("h2#clock");

// Intervals
// setTimeout
function getClock() {
  const date = new Date(); //매초마다 새로운 Date object를 만듦
  const a = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  clock.innerText = a;
}
getClock();
setInterval(getClock, 1000);
