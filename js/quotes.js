//quotes 배열 생성 배열 안은 객체로 이루어짐
const quotes = [
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
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years. ",
    author: "Abraham Linc",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote: "Life is either a daring adventure or nothing at all. ",
    author: "Helen Keller",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss",
  },
  {
    quote:
      "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
    author: "Rosa Parks ",
  },
  {
    quote: "Being happy never goes out of style.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "Life is either a great adventure or nothing.",
    author: "Helen Keller",
  },
];
console.log(quotes.length); //배열의 길이 - 1 = 마지막 인덱스

const quote = document.querySelector("#quotesAuthor span:first-child");
const author = document.querySelector("#quotesAuthor span:last-child");
console.log(quote); //<span></span>
console.log(author); //<span></span>

//random()은 0과 1을 반환 * 배열의 길이만큼 그리고 그걸 floor로 감싸서 무조건 내림해준다.
console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//당연히 randomQuote 초기화해준 다음, 밑의 코드를 작성해야 한다.
quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
