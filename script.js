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
var quotes = [
  {
    quote: 'Everything in the universe has a rhythm, everything dances.',
    source: 'Maya Angelou',
    citation: 'Pocket Maya Angelou Wisdom',
    year: 2019
  },

  {
    quote: 'The truth is, no one of us can be free until everybody is free.',
    source: 'Maya Angelou',
    citation: 'Pocket Maya Angelou Wisdom',
    year: 2019
  },

  {
    quote: 'I think a hero is any person really intent on making this a better place for all people.',
    source: 'Maya Angelou',
    year: 2019
  },

  {
    quote: 'If you are always trying to be normal, you will never know how amazing you can be.',
    source: 'Maya Angelou',
    citation: 'Pocket Maya Angelou Wisdom',
  },

  {
    quote: 'Do the best you can until you know better. Then when you now better, do better.' ,
    source: 'Maya Angelou',
    citation: 'Pocket Maya Angelou Wisdom',
    year: 2019
  },

  {
    quote: 'You may not control all the events that happen to you, but you can decide not to be reduced by them.',
    source: 'Maya Angelou',
    citation: 'Pocket Maya Angelou Wisdom',
    year: 2019
  },

  {
    quote: 'I have learnt that people will forget what you said, people will forget what you did, but peole will never forget how you made them feel.',
    source: 'Maya Angelou',
    citation: 'Pocket Maya Angelou Wisdom',
    year: 2019
  },

  {
    quote: 'Be a rainbow in somebody else’s cloud.',
    source: 'Maya Angelou',
    citation: 'https://www.huffpost.com/entry/maya-angelou-oprah-rainbow_n_5413544',
    year: '2014'
  }
];



/***
 * `getRandomQuote` function
 * This function should return a quote from the array.
***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}


/***
 * `printQuote` function
 * This function should display a new quote each time the user clicks the button 
***/
function printQuote() {
  const randomQuote = getRandomQuote();

  let html = '';
  let quote = quotes[randomQuote].quote;
  let source = quotes[randomQuote].source;
  let citation = quotes[randomQuote].citation;
  let year = quotes[randomQuote].year;

  html += '<p class = "quote">' + quote + '</p>';

  // view quote, source, and year if citation is not available
  if (citation === '') {
    html += '<p class=source>' + source + '<span class="year">' + year + '</p>';
  };

  // view quote, source, and citation if year is not available
  if (year === ''){
    html += '<p class=source>' + source + '<span class="citation">' + citation + '</p>';
  };

  // view quote, source, citation and year when everything is available
  html += '<p class=source>' + source + '<span class="citation">' + citation + '<span class="year">' + year + '</p>';

  //execute
  return html;
}

console.log(printQuote()); //executes function and displays objects 


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);