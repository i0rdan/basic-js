const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
	let x = 1;
    for (let elem of arr) {
      let y = 1;
      if (Array.isArray(elem)) {
        y = y + this.calculateDepth(elem);
        if (y > x) x = y;       
      }
    }
    return x;
  }
};
