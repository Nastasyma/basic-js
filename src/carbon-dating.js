
const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(typeof sampleActivity !== 'string' || isNaN(Number(sampleActivity)) || sampleActivity < 0) {
    return false
  }
  sampleActivity = Number(sampleActivity);
  let result = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/(0.693 / HALF_LIFE_PERIOD));
  if (result < 0 || result === Infinity) {
    return false;
  }
  return result;
}

module.exports = {
  dateSample
};

//console.log(dateSample('11')) //2564
//console.log(dateSample('3.142')) //12923
//console.log(dateSample('-52892')) //false
//console.log(dateSample('WOOT!')) //false
//console.log(dateSample('9000')) //false