const numberUtils = require('./../util/number.utils');

// cpf format: abc.def.ghi-jk (with mask) or abcdefghijk (without mask)
exports = module.exports.getCpf = function (useMask = true) {
  const [a, b, c, d, e, f, g, h, i] = Array.from(Array(9), function () {
    return Math.round(Math.random() * 9);
  });

  const mod_j =
    (a * 10 + b * 9 + c * 8 + d * 7 + e * 6 + f * 5 + g * 4 + h * 3 + i * 2) %
    11;
  const j = mod_j < 2 ? 0 : 11 - mod_j;

  const mod_k =
    (a * 11 +
      b * 10 +
      c * 9 +
      d * 8 +
      e * 7 +
      f * 6 +
      g * 5 +
      h * 4 +
      i * 3 +
      j * 2) %
    11;
  const k = mod_k < 2 ? 0 : 11 - mod_k;

  return useMask
    ? `${a}${b}${c}.${d}${e}${f}.${g}${h}${i}-${j}${k}`
    : `${a}${b}${c}${d}${e}${f}${g}${h}${i}${j}${k}`;
};

exports = module.exports.isValidCpf = function (cpf) {
  if (typeof cpf === 'number') {
    return isValidCpf(`${number}`);
  }

  if (typeof cpf !== 'string') {
    return false;
  }

  const only_num = numberUtils.onlyNumbers(cpf);

  if (only_num.length !== 11) {
    return false;
  }

  const [a, b, c, d, e, f, g, h, i, j, k] = [...only_num].map(function (num) {
    return parseInt(num, 10);
  });

  const mod_j =
    (a * 10 + b * 9 + c * 8 + d * 7 + e * 6 + f * 5 + g * 4 + h * 3 + i * 2) %
    11;
  const expect_j = mod_j < 2 ? 0 : 11 - mod_j;
  const mod_k =
    (a * 11 +
      b * 10 +
      c * 9 +
      d * 8 +
      e * 7 +
      f * 6 +
      g * 5 +
      h * 4 +
      i * 3 +
      expect_j * 2) %
    11;
  const expect_k = mod_k < 2 ? 0 : 11 - mod_k;

  return expect_j === j && expect_k === k;
};
