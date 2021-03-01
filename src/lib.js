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

function generateMock(model) {
  const result = {};
  const keys = Object.keys(model);
  keys.forEach(function (key) {
    result[key] = getMockParam(model[key]);
  });
  return result;
}

function getMockParam(cond) {
  const is_valid = utils.isValidCond(cond);
  if (!is_valid) {
    return;
  }
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
    }
  }[key]();
}

console.log(
  generateMock({
    id: 'id;int;12',
    cpf: 'cpf',
    cnpj: 'cnpj',
    salary: 'money;',
    age: 'int;20;80',
    gender: 'gender',
    firstName: 'firstName',
    lastName: 'lastName',
    fullName: 'fullName',
    fullNameJose: 'fullName;Jose',
    fullNameSilva: 'fullName;;Silva',
    phone: 'phone;+55 (83) 9####-####',
    paras: 'text;1',
    address: 'address;221 Baker Street',
  })
);

// TODO Add follow types:
// date;min;max;format[utc,date,iso,millis]
// color
// url;domain;path
// random;[list of anything]
// support for array params of anything
// support for object params
