const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  /*let count = 1;
    for(let i = 0; i<arr.length; i++) {
      if (typeof arr[i] === 'object') {
        count++
      }
    }
  console.log(count);*/
  }
}

module.exports = {
  DepthCalculator
};

//const depthCalc = new DepthCalculator();
//console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5])) //1
//console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]])) //2
//console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])) //5
//console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])) //15

