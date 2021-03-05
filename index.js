const lib = require('./src/lib');

exports = module.exports = {
    generateJson: function (schema) {
        return lib.getJson(schema);
    },
    getAddress: function (mask = '') {
        return lib.address.getAddress(`address;${mask}`);
    },
    getCnpj: function (useMask = true) {
        return lib.cnpj.getCnpj(useMask);
    },
    getColor: function () {
        return lib.color.getColor('color');
    },
    getCpf: function (useMask = true) {
        return lib.cpf.getCpf(useMask);
    },
    getFloat: function (min = 0, max = Number.MAX_SAFE_INTEGER, decimals = 2) {
        return lib.float.getFloat(`float;${min};${max};${decimals}`);
    },
    getGender: function () {
        return lib.gender.getGender('gender');
    },
    getId: function (format = 'objectId', length = 12) {
        return lib.id.getId(`id;${format};${length}`);
    },
    getInt: function (min = 0, max = Number.MAX_SAFE_INTEGER) {
        return lib.int.getInt(`int;${min};max`);
    },
    getMaskInt: function (mask = '') {
        return lib.maskInt.getMaskInt(`maskInt;${mask}`);
    },
    getMoney: function (mask = '') {
        return lib.money.getMoney(`money;${mask}`);
    },
    getFirstName: function () {
        return lib.name.getFirstName('firstName');
    },
    getLastName: function () {
        return lib.name.getLastName('lastName');
    },
    getFullName: function (firstName = '', lastName = '') {
        return lib.name.getFullName(`fullName;${firstName};${lastName}`);
    },
    getRandom: function (list = []) {
        return lib.random.getRandom(`random;${JSON.stringify(list)}`);
    },
    getStr: function (length = 12, encode = 'hex') {
        return lib.str.getStr(`str;${length};${encode}`);
    },
    getText: function (paragraphs = 1, phrases = 2, words = 5) {
        return lib.text.getText(`text;${paragraphs};${phrases};${words}`);
    },
    isValidCpf: function (cpf) {
        return lib.cpf.isValidCpf(cpf);
    },
    isValidCnpj: function (cpnj) {
        return lib.cnpj.isValidCnpj(cpnj);
    }
};
