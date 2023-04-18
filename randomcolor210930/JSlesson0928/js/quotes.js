const quotes = [
  {
    quote: "Be yourself everyone else is already taken.",
    author: "- Oscar Wilde -",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "- William W. Purkey -",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "- Mae West -",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "- Mahatma Gandhi -",
  },
  {
    quote:
      "Insanity is doing the same thing, over and over again, but expecting different results.",
    author: "- Narcotics Anonymous -",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "- Walt Disney -",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "- James Cameron -",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "- Tony Robbins -",
  },
  {
    quote:
      "Go confidently in the direction of your dreams! Live the life you've imagined.",
    author: "- Henry David Thoreau -",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "- Henry David Thoreau -",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

author.innerText = todaysQuote.author;
quote.innerText = todaysQuote.quote;

const quoteBtn = document.querySelector(".quote-button");

function quoteChange(event) {
  event.preventDefault();
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  author.innerText = todaysQuote.author;
  quote.innerText = todaysQuote.quote;
}

quoteBtn.addEventListener("click", quoteChange);
