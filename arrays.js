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
  for (let i=0; i<items.length;i+=2) {
    console.log(i);
  }
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
