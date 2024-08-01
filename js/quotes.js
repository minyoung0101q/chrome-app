// 랜덤 인용구와 작가

const quotes = [
    {
        quote: "To be, or not to be.",
        author: "William Shakespeare"
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        quote: "Knowledge is power.",
        author: "Francis Bacon"
    },
    {
        quote: "Less is more.",
        author: "Ludwig Mies van der Rohe"
    },
    {
        quote: "I think, therefore I am.",
        author: "René Descartes"
    },
    {
        quote: "Time is money.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Just do it.",
        author: "Nike"
    },
    {
        quote: "Actions speak louder than words.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Seize the day.",
        author: "Horace"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    }
]

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(todayQuote); // 랜덤으로 명언을 뽑아냄

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;