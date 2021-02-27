const crypto = require('crypto');
const utils = require('../util/lib.utils');

// str;length;encode
exports = module.exports.getStr = function (cond) {
  if (utils.isSameCondOp(cond, 'str')) {
    return;
  }

  const default_length = 36;
  const valid_encodes = ['ascii', 'utf8', 'utf16le', 'base64', 'binary', 'hex'];
  const default_encode = 'hex';

  const params = utils.getParams(cond);
  const params_length = parseInt(params[1], 10);
  const params_encode = params[2];

  const max = !!params_length ? params_length : default_length;
  const encode =
    !!params_encode && valid_encodes.includes(params_encode)
      ? params_encode
      : default_encode;

  return crypto.randomBytes(max).toString(encode).substr(0, max);
};
