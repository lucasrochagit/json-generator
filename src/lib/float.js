const libUtils = require('../util/lib.utils');

// float;min;max;decimals
exports = module.exports.getFloat = function (cond) {
  if (!libUtils.isSameCondOp(cond, 'float')) {
    return;
  }

  const default_min = 0;
  const default_max = Number.MAX_SAFE_INTEGER / 100;
  const default_decimals = 2;

  const params = libUtils.getParams(cond);
  const params_min = parseFloat(params[1]);
  const params_max = parseFloat(params[2]);
  const params_decimals = parseFloat(params[3]);

  const min = !!params_min ? params_min : default_min;
  const max = !!params_max ? params_max : default_max;
  const decimals = !!params_decimals ? params_decimals : default_decimals;

  const number = min + Math.random() * (max + 1 - min);
  return parseFloat(number.toFixed(decimals));
};
