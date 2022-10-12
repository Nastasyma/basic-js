const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let array = arr.slice(0);
  let newArray = [];
  for (let i=0; i<array.length; i++) {
    //console.log(arr[i])
    //console.log(arr[arr.length-1])
    if (array[i] === '--double-next') {
      if (array[i] !== array[array.length-1]) {
        array[i] = array[i+1];
        newArray.push(array[i]);
      }
    } else if (array[i] === '--double-prev') {
      if(array[i - 2] !== '--discard-next' && array[0] !== '--double-prev') {
        array[i] = array[i-1]
        newArray.push(array[i]);
      }
    } else if (array[i] === '--discard-next') {
      i++
    } else if (array[i] === '--discard-prev') {
        if(array[i - 2] !== '--discard-next') {
          newArray.pop();
        }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

module.exports = {
  transform
};

//console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])); //[1, 2, 3, 1337, 1337, 1337, 4, 5]
//console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])); //[1, 2, 3, 4, 5]
//console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])); //[1, 2, 3, 4, 5]
//console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])); //[1, 2, 3, 1337, 4, 5]
//console.log(transform(['--discard-prev', 1, 2, 3])); //[1, 2, 3]
//console.log(transform(['--double-prev', 1, 2, 3])); //[1, 2, 3]
//console.log(transform([1, 2, 3, '--discard-next'])); //[1, 2, 3]
//console.log(transform([1, 2, 3, '--double-next'])); //[1, 2, 3]