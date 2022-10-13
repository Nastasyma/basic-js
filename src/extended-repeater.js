const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newStr = '';
  if(!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if(options.additionRepeatTimes) {
    options.addition = `${`${options.addition}${options.additionSeparator}`.repeat(options.additionRepeatTimes-1)}${options.addition}`;
  }
  if(!options.separator) {
    options.separator = "+";
    newStr = `${str}${options.separator}`
  }
  if(!options.addition) {
    newStr = `${str}${options.separator}`
    return `${newStr.repeat(options.repeatTimes-1)}${str}`;
  } else {
    newStr =`${str}${options.addition}${options.separator}`;
    return `${newStr.repeat(options.repeatTimes-1)}${str}${options.addition}`;
  }
}

module.exports = {
  repeater
};

//console.log((repeater('la', { repeatTimes: 3 }))) //'la+la+la'
//console.log((repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }))) //'la+sla+sla+'
//console.log((repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 }))) //'LALA++sLALA++sLALA++'
//console.log((repeater('12345', { repeatTimes: 5, separator: '3 words separator' }))) //'123453 words separator123453 words separator123453 words separator123453 words separator12345'
//console.log((repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))) //'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
//console.log((repeater('REPEATABLE_STRING', { repeatTimes: 2, separator: '222', addition: 'ADDITION', additionRepeatTimes: 3 }))) //'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION'
/*const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};
console.log((repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }))) //'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'*/