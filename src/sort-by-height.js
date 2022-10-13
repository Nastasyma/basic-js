const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
let arraySorted = [];
let newArray = [];

for (let i=0; i<arr.length; i++) {
  if(arr[i] !== -1) {
    arraySorted.push(arr[i])
  }
}
arraySorted.sort((a, b) => a - b);
//console.log(arraySorted)
let count = 0;
for (let i=0; i<arr.length; i++) {
  if(arr[i] === -1) {
    newArray.push(arr[i])
  } else {
    newArray.push(arraySorted[count])
    count++
  }
}
//console.log(newArray)
return newArray;
}

module.exports = {
  sortByHeight
};

//console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])) //[-1, 150, 160, 170, -1, -1, 180, 190]