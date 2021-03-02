const libUtils = require('../util/lib.utils');

// int;min;max
exports = module.exports.getInt = function (cond) {
  if (!libUtils.isSameCondOp(cond, 'int')) {
    return;
  }

  const default_min = 0;
  const default_max = Number.MAX_SAFE_INTEGER;
  const default_size = 1;

  const params = libUtils.getParams(cond);
  const params_min = parseInt(params[1], 10);
  const params_max = parseInt(params[2], 10);
  const params_size = parseInt(params[3], 10);

  const min = !!params_min ? params_min : default_min;
  const max = !!params_max ? params_max : default_max;
  const size = !!params_size ? params_size : default_size;

  return Math.floor(min + Math.random() * (max + 1 - min));
};
