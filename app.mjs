import { createRandomNumber } from "./randomUtil.mjs";

let min = 0;
let max = 0;

if (isThisRuningInBrowser()) {
  // I nettleseren
  const bt = document.getElementById("newNumberButton");
  bt.onclick = () => {
    getLimits();
    console.log(outputNumber(min, max));
  };
}

getLimits();
console.log(outputNumber(min, max));

// -------------------------------------------------------------
function getLimits() {
  if (isThisRuningInBrowser()) {
    min = document.getElementById("min").value;
    max = document.getElementById("max").value;
  } else {
    min = process.argv[2];
    max = process.argv[3];
  }
  min = min * 1;
  max = max * 1;
}

function outputNumber(min, max) {
  return createRandomNumber(min, max);
}

function isThisRuningInBrowser() {
  try {
    if (document) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
}
