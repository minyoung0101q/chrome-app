//먼저 images 배열을 생성한다.
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

//images 배열에서 random으로 꺼낸다.
const randomImage = images[Math.floor(Math.random() * images.length)];
console.log(randomImage); //2.jpeg 아니면 0.jpeg 등 랜덤 이걸 src 경로에 넣을것

//body에 createElement해서 넣어준다./
//먼저, createElement한다.
const image = document.createElement("img");
console.log(image); //<img>
//appendChild()
image.src = `img/${randomImage}`;
document.body.appendChild(image);
