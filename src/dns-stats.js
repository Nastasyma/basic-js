const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let dnsObject = {};
  for(let i=0; i<domains.length-1; i++) {
    let newItem1 = '.' + domains[i].split('.').slice(-1);
    ///console.log(newItem1);
    if (newItem1 in dnsObject) {
      dnsObject[newItem1]++;
    } else {
      dnsObject[newItem1] = 1
    }
  }
  for(let i=0; i<domains.length; i++) {
    let newItem2 = '.' + domains[i].split('.').reverse().slice(0,i+1).join('.');
    //console.log(newItem2)
    domains[i] = '.' + domains[i].split('.').reverse().join('.');
    if (domains[i] in dnsObject) {
      dnsObject[domains[i]]++;
    } else {
      dnsObject[domains[i]] = 1
    }
    if (newItem2 in dnsObject) {
      dnsObject[newItem2]++;
    } else {
      dnsObject[newItem2] = 1
    }
  }
  //console.log(dnsObject)
  return dnsObject
}

module.exports = {
  getDNSStats
};

//console.log(getDNSStats(['epam.com'])); //{ '.com': 1, '.com.epam': 1 }
//console.log(getDNSStats(['epam.com', 'info.epam.com'])); //{ '.com': 2, '.com.epam': 2, '.com.epam.info': 1 }
//console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])); //{ '.ru': 3,'.ru.yandex': 3, '.ru.yandex.code': 1, '.ru.yandex.music': 1, }