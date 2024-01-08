//현재 위치 가져오기

function GeoOk(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("You live in", latitude, longitude);
}

function GeoError(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);
