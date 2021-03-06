const str = require('./str');
const int = require('./int');
const libUtils = require('../util/lib.utils');

// id;type[string,int,objectId,guid];length
exports = module.exports.getId = function (cond) {
  if (!libUtils.isSameCondOp(cond, 'id')) {
    return;
  }

  const default_length = 24;
  const default_type = 'string';
  const valid_types = ['string', 'int', 'objectId', 'guid'];

  const params = libUtils.getParams(cond);
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
    string: function () {
      return getStrId(length);
    },
    int: function () {
      return getIntId(length);
    },
    objectId: function () {
      return getObjectId();
    },
    guid: function () {
      return getGuidId();
    }
  }[type]();
}


function getStrId(length) {
  return str.getStr(`str;${length};hex`);
}

function getIntId(length) {
  return int.getInt(`int;;;${length}`);
}

function getObjectId() {
  return function (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) {
    return s(d.now() / 1000) + ' '.repeat(h).replace(/./g, function () {
      return s(m.random() * h);
    });
  }();
}

function getGuidId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
