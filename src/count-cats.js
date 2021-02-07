const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let x = 0;
  matrix.forEach(function(elem) {
	elem.forEach(function(el) {
	if(el == '^^') x += 1;
    });
  });
	return x;
};
