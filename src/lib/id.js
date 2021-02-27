const str = require('./str');
const int = require('./int');
const utils = require('../util/lib.utils');

// TODO add ObjectId and GUID
// id;type[string,int,objectId,guid];length *
exports = module.exports.getId = function (cond) {
  if (!utils.isSameCondOp(cond, 'id')) {
    return;
  }

  const default_length = 24;
  const default_type = 'str';
  const valid_types = ['string', 'int', 'objectId', 'guid'];

  const params = utils.getParams(cond);
  const params_type = params[1];
  const params_length = parseInt(params[2], 10);

  const type =
    params_type && valid_types.includes(params_type)
      ? params_type
      : default_type;
  const length = !!params_length ? params_length : default_length;

  return getId(type, length);
};

function getId(type, length) {
  return {
    str: function () {
      return getStrId(length);
    },
    int: function () {
      return getIntId(length);
    },
  }[type]();
}

function getIntId(length) {
  return int.getInt(`int;;;${length}`);
}

function getStrId(length) {
  return str.getStr(`str;${length};hex`);
}
