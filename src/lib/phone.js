const libUtils = require('../util/lib.utils');
const numberUtils = require('../util/number.utils');
const int = require('./int');

// phone;mask(+## (##) ###-####)
exports = module.exports.getPhone = function (cond) {
  if (!libUtils.isSameCondOp(cond, 'phone')) {
    return;
  }

  const default_mask = '+55 ## 9####-####';

  const params = cond.split(';');
  const params_mask = params[1];
  const mask = !!params_mask ? params_mask : default_mask;

  const phone_chars = [...mask];

  const phone_result = phone_chars.map(function (char) {
    if (char !== '#') {
      const int_char = parseInt(char, 10);
      if (numberUtils.isInteger(int_char)) {
        return int_char;
      }
      return char;
    }
    return int.getInt('int;0;9');
  });
  return phone_result.join('');
};
