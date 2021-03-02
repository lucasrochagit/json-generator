const {
  cnpj,
  cpf,
  float,
  id,
  int,
  str,
  gender,
  name,
  maskInt,
  text,
  money,
  address,
  color,
  random
} = require('./lib/exports');
const utils = require('./util/lib.utils');

exports = module.exports = {
  getJson,
  cnpj,
  cpf,
  float,
  id,
  int,
  str,
  gender,
  name,
  maskInt,
  text,
  money,
  address,
  color,
  random
};

function getJson(schema) {
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
    maskInt: function () {
      return maskInt.getMaskInt(cond);
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
