const int = require('./int');
const libUtils = require('../util/lib.utils');
const numberUtils = require('../util/number.utils');
const maskInt = require('./mask.int');

// money;mask(R$ #.####,##)
exports = module.exports.getMoney = function (cond) {
  if (!libUtils.isSameCondOp(cond, 'money')) {
    return;
  }

  const default_mask = 'R$ #.###,##';

  const params = cond.split(';');
  const params_mask = params[1];
  const mask = !!params_mask ? params_mask : default_mask;

  return maskInt.getMaskInt(`maskInt;${mask}`);
};
