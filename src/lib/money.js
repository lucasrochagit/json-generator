const int = require('./int');
const libUtils = require('../util/lib.utils');
const numberUtils = require('../util/number.utils');

// money;mask(R$ #.####,##)
exports = module.exports.getMoney = function (cond) {
  if (!libUtils.isSameCondOp(cond, 'money')) {
    return;
  }

  const default_mask = 'R$ #.####,##';

  const params = cond.split(';');
  const params_mask = params[1];
  const mask = !!params_mask ? params_mask : default_mask;

  const money_chars = [...mask];

  const money_result = money_chars.map(function (char) {
    if (char !== '#') {
      const int_char = parseInt(char, 10);
      if (numberUtils.isInteger(int_char)) {
        return int_char;
      }
      return char;
    }
    return int.getInt('int;0;9');
  });

  return money_result.join('');
};
