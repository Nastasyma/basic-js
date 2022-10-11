const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let array = []
  if (members) {
    for (let i=0; i<members.length; i++) {
      if (typeof members[i] === 'string') {
        members[i] = members[i].replace(/\s/g, '').toUpperCase()[0];
        array.push(members[i])
      }
    }
  }
  //console.log(array)
  return array.sort().join('');
}

module.exports = {
  createDreamTeam
};

/*console.log(createDreamTeam(['   William Alston ',
' Paul Benacerraf',
'  Ross Cameron',
'       Gilles Deleuze',
'  Arda Denkel ',
'  Michael Devitt',
'  Kit Fine',
' Nelson Goodman',
'David Kolb',
'   Saul Kripke',
'  Trenton Merricks',
'  Jay Rosenberg',]));*/