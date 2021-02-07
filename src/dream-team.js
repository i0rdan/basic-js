const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let str = '';
  members.forEach(function(elem) {
	  if(typeof elem === 'string') {
		  elem = elem.trim();
		  str += elem[0].toUpperCase();  
	  }
  });
  return str.split('').sort().join('');
};
