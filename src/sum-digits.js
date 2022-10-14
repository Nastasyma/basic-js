const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;
  let nums = n.toString().split('');
    for (let i=0; i<nums.length; i++) {
      sum += Number(nums[i]);
      if (sum.toString().length > 1) {
        for (let j=0; j<nums[i].length; j++) {
          sum = 0;
          sum += Number(nums[i][j]);
        }
      }
  }
  //console.log(sum)
  return sum;
}

module.exports = {
  getSumOfDigits
};

//console.log(getSumOfDigits(91)) //1
//console.log(getSumOfDigits(100)) //1
//console.log(getSumOfDigits(35)) //8
//console.log(getSumOfDigits(99)) //9
//console.log(getSumOfDigits(123)) //6