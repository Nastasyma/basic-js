const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let array = n.split('-')
  let newArray = [];
  for (let i=0; i<array.length; i++) {
    if(!isNaN(parseInt(array[i],16))) {
    newArray.push(parseInt(array[i],16));
    }
  }
  //console.log(array.length);
  //console.log(newArray.length);
  return array.length === newArray.length ? true : false;
}
module.exports = {
  isMAC48Address
};

//console.log(isMAC48Address('00-1B-63-84-45-E6')) //true
//console.log(isMAC48Address('Z1-1B-63-84-45-E6')) //false
//console.log(isMAC48Address('not a MAC-48 address')) //false
//console.log(isMAC48Address('G0-00-00-00-00-00')) //false