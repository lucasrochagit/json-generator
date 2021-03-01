const cnpj = require('./lib/cnpj');
const cpf = require('./lib/cpf');
const float = require('./lib/float');
const id = require('./lib/id');
const int = require('./lib/int');
const str = require('./lib/str');
const gender = require('./lib/gender');
const utils = require('./util/lib.utils');
const name = require('./lib/name');
const phone = require('./lib/phone');
const text = require('./lib/text');
const money = require('./lib/money');
const address = require('./lib/address');
const color = require('./lib/color');
const random = require('./lib/random');

exports = module.exports.generateJson = function (schema) {
  const result = {};
  const keys = Object.keys(schema);
  keys.forEach(function (key) {
    result[key] = getJsonParam(schema[key]);
  });
  return result;
};

function getJsonParam(cond) {
  if (typeof cond === 'string') {
    const is_valid = utils.isValidCond(cond);
    if (is_valid) {
      return getStringCond(cond);
    }
  }
  else if (cond instanceof Array) {
    if (cond.length === 2) {
      const times = cond[0];
      if (Number.isInteger(times)) {
        return Array.from(Array(times), function () {
          return getJsonParam(cond[1]);
        });
      }
    }
    return cond.map(item => getJsonParam(item));
  }
  else if (cond instanceof Object) {
    const keys = Object.keys(cond);
    return keys.reduce((acc, key) => {
      acc[key] = getJsonParam(cond[key]);
      return acc;
    }, {});
  }
  return cond;
}

function getStringCond(cond) {
  const key = utils.getKey(cond);
  return {
    id: function () {
      return id.getId(cond);
    },
    cnpj: function () {
      return cnpj.getCnpj(cond);
    },
    cpf: function () {
      return cpf.getCpf(cond);
    },
    float: function () {
      return float.getFloat(cond);
    },
    int: function () {
      return int.getInt(cond);
    },
    str: function () {
      return str.getStr(cond);
    },
    gender: function () {
      return gender.getGender(cond);
    },
    firstName: function () {
      return name.getFirstName(cond);
    },
    lastName: function () {
      return name.getLastName(cond);
    },
    fullName: function () {
      return name.getFullName(cond);
    },
    phone: function () {
      return phone.getPhone(cond);
    },
    text: function () {
      return text.getText(cond);
    },
    money: function () {
      return money.getMoney(cond);
    },
    address: function () {
      return address.getAddress(cond);
    },
    color: function () {
      return color.getColor(cond);
    },
    random: function () {
      return random.getRandom(cond);
    }
  }[key]();
}
