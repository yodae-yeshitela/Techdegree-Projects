/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote:
      "Any sufficiently advanced technology is indistinguishable from magic.",
    source: "Arthur C. Clarke",
    citation: "Profiles of The Future",
    year: "1961",
    tag: "Technology"
  },
  {
    quote:
      "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
    source: "Bill Gates"
  },
  {
    quote:
      "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    source: "Barack Obama",
    tag: "Motivation"
  },
  {
    quote: "Man is still the most extraordinary computer of all.",
    source: "John F. Kennedy"
  },
  {
    quote:
      "I think computer viruses should count as life. I think it says something about human nature that the only form of life we have created so far is purely destructive. We've created life in our own image.",
    source: "Stephen Hawking"
  },
  {
    quote:
      "Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.",
    source: "Thomas Edison"
  },
  {
    quote:
      "It has become appallingly obvious that our technology has exceeded our humanity.",
    source: "Albert Einstein",
    tag: "Technology"
  },
  {
    quote:
      "Once a new technology rolls over you, if you’re not part of the steamroller, you’re part of the road.",
    source: "Stewart Brand",
    tag: "Technology"
  },
  {
    quote:
      "Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful, that’s what matters to me.",
    source: "Steve Jobs",
    tag: "Lifestyle"
  },
  {
    quote:
      "All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness.",
    source: "Mark Kennedy"
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    tag: "Motivation"
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    source: "Mother Teresa",
    tag: "Love"
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    source: "Helen Keller",
    tag: "Life"
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    source: "Thomas Jefferson",
    tag: "Hardwork"
  },
  {
    quote:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    source: "Henry Ford",
    tag: "Motivation"
  },
  {
    quote:
      "Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It’s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.",
    source: "Muhammad Ali",
    tag: "Inspiration"
  }
];

/***
 * `getRandomQuote` function
 ***/
var currentQuote = Math.floor(Math.random() * 10); //initial quote index initialization

function getRandomQuote() {
  let quote = quotes[currentQuote]; //get quote from array
  let nextQuote = Math.floor(Math.random() * 10); //get index of next quote

  //check if the next quote is different from the current quote
  while (currentQuote === nextQuote) {
    nextQuote = Math.floor(Math.random() * 10); //if next quote is same with current quote get a new quote
  }
  currentQuote = nextQuote;
  return quote;
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  //get the quote and assign it to the variable quote
  let quote = getRandomQuote();

  //call helper function quoteToHtml to generate html then set the content of the quote-box
  document.getElementById("quote-box").innerHTML = quoteToHtml(quote);
  changeColor();
}

//helper function to generat html
function quoteToHtml(quote) {
  var html = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
  //add citation and year if the quote includes one
  if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }
  //add tag if a quote has one otherwise tag the quote as random
  html += `<span class="tag">${quote.tag?quote.tag:"Random"}</span>`;
  return `${html}</p>`;
}

//function to change background color of the container
function changeColor() {
  //helper function to generate a random color in rgb format
  var randomColor = () => {
    return `${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)}`;
  };
  //set the background color to the generated color
  document.getElementsByTagName(
    "body"
  )[0].style.backgroundColor = `rgb(${randomColor()})`;
}

//set an interval to generate a new quote and change background color every 6 seconds
setInterval(printQuote, 6000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
