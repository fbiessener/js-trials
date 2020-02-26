"use strict";

const HOMETOWN = "Brooklyn Park";

// 1. isHometown

function isHometown(town) {
  if (town === HOMETOWN) {
    return true;
  } return false;
}


// 2. getFullName

function getFullName(fname, lname) {
  return (`${fname} ${lname}`);
}


// 3. calculateTotal

function calculateTotal(basePrice, state, tax = 0.05) {
  const subTotal = (basePrice * (1 + tax));
  let fee = 0;

  if (state === 'CA') {
    fee = (0.03 * subTotal);
  } else if (state === 'PA') {
    fee = 2;
  } else if (state === 'MA') {
    if (basePrice <= 100) {
      fee = 1;
    } fee = 3;
  } return subTotal + fee;
}
