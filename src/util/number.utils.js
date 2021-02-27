exports = module.exports.isBetween = function (min, max, num) {
  return min <= num && num <= max;
};

exports = module.exports.isInteger = function (num) {
  return Number.isInteger(num);
};
