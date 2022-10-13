const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = n.toString();
  let m = 0;
  for (let i = 0; i < str.length; i++) {
    m = Math.max(str.slice(0, i) + str.slice(i + 1), m);
  }
  return m;
}

module.exports = {
  deleteDigit
};

//console.log(deleteDigit(152)) //52
//console.log(deleteDigit(1001)) //101
//console.log(deleteDigit(10)) //1
//console.log(deleteDigit(222219)) //22229
//console.log(deleteDigit(109)) //19
//console.log(deleteDigit(342)) //42