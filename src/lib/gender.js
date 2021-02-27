const utils = require('../util/lib.utils');

exports = module.exports.getGender = function (cond) {
  if (!utils.isSameCondOp(cond, 'gender')) {
    return;
  }

  const index = Math.round(Math.random());
  return ['male', 'female'][index];
};
