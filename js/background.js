const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage); //2.jpeg 0.jpeg 등 랜덤으로 나옴
//Javascript에서 이미지를 만들고 그걸 html에 추가하자
const bgImage = document.createElement("img"); //img라는 element를 생성해보자
console.log(bgImage); //<img>
//백틱(``)으로 바꾸고 chosenImage를 추가해서 string을 만들자
bgImage.src = `img/${chosenImage}`;
//다시 bgImage 콘솔을 찍어보자
console.log(bgImage);

document.body.appendChild(bgImage);
