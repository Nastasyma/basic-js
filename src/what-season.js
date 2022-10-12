const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if(!(date instanceof Date) || Object.keys(date).length !== 0) {
    throw new Error('Invalid date!');
  }
  let month = date.getMonth();
  //console.log(month);
  if (month == '2' || month == '3' || month =='4') {
    return 'spring'
  } else if (month == '0' || month == '1' || month =='11') {
    return 'winter'
  } else if (month == '5' || month == '6' || month =='7') {
    return 'summer'
  } else if (month == '8' || month == '9' || month =='10') {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};

//console.log(getSeason(new Date(1661, 4, 25, 6, 22, 21, 37))) //spring
//console.log(getSeason(new Date(1664, 1, 17, 13, 41, 10, 345))) //winter
//console.log(getSeason(new Date(1582, 5, 24, 3, 30, 22, 496))) //summer
//console.log(getSeason(new Date(1415, 9, 25, 19, 34, 45, 741))) //autumn