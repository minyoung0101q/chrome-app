const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setTimeout(sayHello, 2000);
//setTimeout : 2초 뒤에 hello가 로그에 출력됨
//Intervals : 처음에 아무것도 출력되지 않고 2초 후에 hello 출력 -> 이게 반복
