"use strict";

function flattenAndSort(array) {
  return  array.flat(Infinity).sort((a,b) => a - b);
}
console.log(flattenAndSort([[], []]))