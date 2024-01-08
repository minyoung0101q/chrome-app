function onGeoOk(position) {
  //JavaScript가 전달해줄 정보에 대한 공간만 채워주면 된다.
  console.log(position);
  const lat = position.coords;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
