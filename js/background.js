// 랜덤 배경화면
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage); // 0.jpeg or 1.jpeg or 2.jpeg

const img = document.createElement("img");
img.src = `./img/${chosenImage}`;

document.body.appendChild(img);

