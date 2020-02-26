"use strict";


// 1. printIndices
function printIndices(items) {
  // for...in loop will enumerate for items that have Enumerable property
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
  for (const i in items) {
    console.log(`${items[i]}: ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // for (init; condt; exp) allows us to do a step as step is not an option in js
  for (let i=0; i<items.length;i+=2) {
    console.log(items[i]);
  }
}

function compare(a, b) {
  // fixing Array.prototype.sort
  return a - b;
}

// 3. smallestNItems
function smallestNItems(items, n) {
  let sortedNums = [];
  // add comment here about fix
  sortedNums = nums.sort(compare);
  console.log(sortedNums)
  for (const number in sortedNums.slice(0, n)) {
    //print out n smallest items
    console.log(sortedNums[number])
  }

}
