"use strict";

const words1 = new Set(['apple', 'cherry', 'berry', 'banana'])
const words2 = new Set(['apple', 'cherry', 'berry'])

function wordsInCommon(words1, words2) {
  let intersectionSet = new Set();

  for (const word of words1) {
    if (words2.has(word)) {
      intersectionSet.add(word)
    }
  } return console.log(intersectionSet)
}


function kidsGame(names) {
  // Replace this with your code
}
