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
 * Refer back to the Random Number Challenge module
***/

function getRandomQuote() {
  // Use Math.random() to generate quote
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}


/***
 * `printQuote` function
 * This function should display a new quote each time the user clicks the button 
***/
function printQuote() {
  let randomQuote = getRandomQuote();

  // Display the random quote
  let html = '
    <p class="quote"> ${randomQuote.quote} </p>
    <p class="source"> ${randomQuote.source}
  ';

  // if citation avaiable, display citation
  if (randomQuote.citation) {
    html += '
    <span class="citation">${randomQuote.citation}</span>
    ';
  }

  // if year available, display year
  if (randomQuote.year){
    html += '
    <span class="year">${randomQuote.year}</span>
    ';
  }
  
  // required as per project instructions
  html += '</p>';
  return document.getElementById('quote-box').innerHTML = html;

};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
