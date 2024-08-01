const API_KEY = "99b0a9f41ad476bc4a9a92927baaecd2";

function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도

    // 비동기 네트워크
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // weather 객체 찍힘

            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            weather.innerText = `${data.weather[0].main}`;
            city.innerText = `${data.name}`;
        })
}

function onGeoError() {
    alert("위치를 찾을 수 없습니다.");
}

// 비동기적으로 사용자의 현재 위치를 가져오려고 시도함
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

