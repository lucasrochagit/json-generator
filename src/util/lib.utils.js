const condition_list = require('./constants').condition_list;

exports = module.exports.isSameCondOp = function (str, op) {
  return this.getKey(str) === op;
};

exports = module.exports.getKey = function (cond) {
  return cond.split(';')[0];
};

exports = module.exports.isValidCond = function (cond) {
  const key = this.getKey(cond);
  return !!key && condition_list.includes(key);
};

exports = module.exports.getParams = function (cond) {
  return cond.replace(' ', '').split(';');
};
