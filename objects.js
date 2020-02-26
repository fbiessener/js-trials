"use strict";


// 1. countWords
function countWords(phrase) {
  // return an object of each word and the no. of times they appear
  let wordCounts = {};
  const splitPhrase = phrase.split(" ");

  for (const word of splitPhrase) {
    if (word in wordCounts) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  } return wordCounts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // return object of melons that cost 'price'
  const melonPrices = {
      2.50: ['Cantaloupe', 'Honeydew'],
      2.95: ['Watermelon'],
      3.25: ['Musk', 'Crenshaw'],
      14.25: ['Christmas']
  }; 

  for (const melon of Object.values(melonPrices)) {
    if (melonPrices.hasOwnProperty(price)) {
      return melonPrices[price].sort();
    } else {
      return console.log(`No melon with that ${price}`);
    }
  }
}
