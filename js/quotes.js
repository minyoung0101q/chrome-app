const quotes = [
  {
    quote: "When you have faults, do not fear to abandon them.",
    author: "Confucius",
  },
  {
    quote:
      "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
  },
  {
    quote: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
  },
  {
    quote: "Youth isn’t always all it’s touted to be.",
    author: "Lawana Blackwell",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Life is either a daring adventure or nothing at all. ",
    author: "Helen",
  },
  {
    quote: "The goal of life is living in agreement with nature. ",
    author: "Zeno",
  },
  {
    quote: "This too shall pass.",
    author: "Et hoc transibit",
  },
  {
    quote: "The die is cast.",
    author: "Julius caesar",
  },
];
//quotes 배열의 길이
console.log(quotes.length);
//quotes 배열의 길이 - 1 =  마지막 인덱스는 9
console.log(quotes.length - 1);

//명언과 작가를 랜덤으로 뽑는다.
//Math.random을 먼저 하고 그것으르 Math.floor로 감싼다.
console.log(quotes[0]);
console.log(quotes[2]);
console.log(quotes.length);
console.log(Math.floor(Math.random() * quotes.length));
//객체를 출력,
console.log(quotes[Math.floor(Math.random() * quotes.length)]);

//랜덤으로 준비된 배열에서 명언 한 개를 뽑아줄 것임
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const randomQuoteAuthor = quotes[Math.floor(Math.random() * quotes.length)];

console.log(randomQuoteAuthor.quote);
console.log(quote);
console.log(quote[5]); //만약 배열의 길이가 2인데 없는 인덱스를 찾으려고 한다면 undefined가 뜬다.
console.log(author);
quote.innerText = randomQuoteAuthor.quote;
author.innerText = randomQuoteAuthor.author;
