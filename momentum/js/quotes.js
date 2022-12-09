const quotes = [
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
        author: "-사무엘존슨",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
        author: "-찰스다윈",
    },
    {
        quote: "만약 우리가 할 수 잇는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다",
        author: "-에디슨",
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다",
        author: "-켄러",
    },
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "-이소룡"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;