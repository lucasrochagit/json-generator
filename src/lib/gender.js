const libUtils = require('../util/lib.utils');

exports = module.exports.getGender = function (cond) {
  if (!libUtils.isSameCondOp(cond, 'gender')) {
    return;
  }

  const index = Math.round(Math.random());
  return ['male', 'female'][index];
};
