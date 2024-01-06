const clock = document.querySelector("#clock-digital");
console.log(clock); //<h2 id="clock-digital"></h2>

function clockDigital() {
  const date = new Date();
  const dateHours = String(date.getHours());
  const dateMinutes = String(date.getMinutes());
  const dateSeconds = String(date.getSeconds());
  const datePadStartSeconds = dateSeconds.padStart(2, "0");
  const paintClock = `${dateHours}:${dateMinutes}:${datePadStartSeconds}`;
  clock.innerText = paintClock;
}
clockDigital();
setInterval(clockDigital, 1000);
