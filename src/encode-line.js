const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let result = [];
    let count = 0;
    let a = str[0];
    if(str.length === 0) {
      return '';
    }
    for(let i=0; i<str.length; i++) {
      if(str[i] === a) {
        count++;
      } else {
        if(count === 1) {
          result.push(a);
        } else {
          result.push(count+a);
        }
        count = 1;
        a = str[i];
      }
    }
    if(count === 1) {
      result.push(a);
    } else {
      result.push(count+a);
    }
    //console.log(result)
    return result.join('')
}

module.exports = {
  encodeLine
};

//console.log(encodeLine('aaaatttt')) //'4a4t'
//console.log(encodeLine('aabbccc')) //'2a2b3c'
//console.log(encodeLine('abbcca')) //'a2b2ca'
//console.log(encodeLine('xyz')) //'xyz'
//console.log(encodeLine('')) //''
