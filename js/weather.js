const API_KEY = "19e054334c61b27dd891a0dfdef0072e";
//이제 URL을 JavaScript에서 부르자
//현재 위치 가져오기

function GeoOk(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("You live in", latitude, longitude);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  console.log(url); // 이제 URL에 있는 현재 위치에 대한 날씨 정보를 가져와야겠지, 얻어야 한다.
  // 우리가 로그에 찍힌 url을 클릭하면 브라우저가 URL로 이동해서 응답을 얻는다.
  // 우리는 fetch를 사용해서 url을 얻을 것이다.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      // console.log(data.name, data.weather[0].main);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //JavaScript는 이 url을 불렀다. 그치만 아직 얻은 정보를 사용하지 않았다.
  //이제 이걸 얻었을 때 뭘 하라고 JavaScript에게 말해줘야 한다.
}

function GeoError(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);
