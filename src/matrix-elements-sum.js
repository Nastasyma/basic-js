const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;
  let columnLen = matrix[0].length;
  for (let i=0; i<columnLen; i++) {
    for (let j=0; j<matrix.length; j++) {
      //console.log(matrix[j][i])
      sum += matrix[j][i];
      if(matrix[j][i] === 0) {
      j = j+2;
      }
    }
  }
//console.log(sum)
return sum
}

module.exports = {
  getMatrixElementsSum
};

/*console.log(getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
])) //9

console.log(getMatrixElementsSum([
  [1, 2, 3, 4],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
])) //15

console.log(getMatrixElementsSum([
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
])) //18

console.log(getMatrixElementsSum([
  [0],
])) //0

console.log(getMatrixElementsSum([
  [1],
  [5],
  [0],
  [2],
])) //6*/
