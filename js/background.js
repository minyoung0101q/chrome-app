const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
console.log(images[0]);
//javscript에서 html element를 생성해서 html에 넣어준다.

const image = document.createElement("img");
console.log(image); //태그를 반환 -> <img>
// const bgImage = (image.src = `img/0.jpeg`); //이렇게 하면 하드코딩

const bgImage = (image.src = `img/${
  images[Math.floor(Math.random() * images.length)]
}`);
console.log(bgImage); //이렇게 해야 images 배열을 활용할 수 있음
console.log(typeof bgImage); //string
//bgImage를 html element안에 넣어줘야 한다. body의 자식으로
document.body.appendChild(image);
//bgImage가 아니라 image를 넣어야 한다.
