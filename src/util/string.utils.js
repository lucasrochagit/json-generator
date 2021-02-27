exports = module.exports.onlyLetters = function (str) {
  return str.replace(/[^a-zA-Z]/g, '');
};

exports = module.exports.onlyNumbers = function (str) {
  return str.replace(/\D+/g, '');
};

exports = module.exports.isLetter = function (char) {
  return char.toLowerCase() != char.toUpperCase();
};

exports = module.exports.capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
