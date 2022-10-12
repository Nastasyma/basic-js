const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let count = 0;
  //console.log(arr1)
  //console.log(arr2)
  for(let i=0; i<arr1.length; i++) {
    for(let j=0; j<arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        count++
        arr2[j] = '';
        //console.log(arr2)
        break
      }
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};

//console.log(getCommonCharacterCount('aabcc', 'adcaa')); //3
//console.log(getCommonCharacterCount('zzzz', 'zzzzzzz')); //4
//console.log(getCommonCharacterCount('abca', 'xyzbac')); //3
//console.log(getCommonCharacterCount('', 'abc')); //0
//console.log(getCommonCharacterCount('a', 'b')); //0