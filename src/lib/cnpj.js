const stringUtils = require('../util/string.utils');

// cnpj format: ab.cde.fgh/ijkl-mn (with mask) or abcdefghijklmn (without mask)
exports = module.exports.getCnpj = function (useMask = true) {
  const [a, b, c, d, e, f, g, h] = Array.from(Array(8), function () {
    return Math.round(Math.random() * 8);
  });
  const i = 0;
  const j = 0;
  const k = 0;
  const l = 1;

  const mod_m =
    (a * 5 +
      b * 4 +
      c * 3 +
      d * 2 +
      e * 9 +
      f * 8 +
      g * 7 +
      h * 6 +
      i * 5 +
      j * 4 +
      k * 3 +
      l * 2) %
    11;
  const m = mod_m < 2 ? 0 : 11 - mod_m;

  const mod_n =
    (a * 6 +
      b * 5 +
      c * 4 +
      d * 3 +
      e * 2 +
      f * 9 +
      g * 8 +
      h * 7 +
      i * 6 +
      j * 5 +
      k * 4 +
      l * 3 +
      m * 2) %
    11;
  const n = mod_n < 2 ? 0 : 11 - mod_n;

  return useMask
    ? `${a}${b}.${c}${d}${e}.${f}${g}${h}/${i}${j}${k}${l}-${m}${n}`
    : `${a}${b}${c}${d}${e}${f}${g}${h}${i}${j}${k}${l}${m}${n}`;
};

exports = module.exports.isValidCnpj = function (cnpj) {
  if (typeof cnpj !== 'string') {
    return false;
  }

  const only_num = stringUtils.onlyNumbers(cnpj);

  if (only_num.length !== 14) {
    return false;
  }
  const [a, b, c, d, e, f, g, h, i, j, k, l, m, n] = [...only_num].map(
    function (num) {
      return parseInt(num, 10);
    }
  );

  const mod_m =
    (a * 5 +
      b * 4 +
      c * 3 +
      d * 2 +
      e * 9 +
      f * 8 +
      g * 7 +
      h * 6 +
      i * 5 +
      j * 4 +
      k * 3 +
      l * 2) %
    11;
  const expect_m = mod_m < 2 ? 0 : 11 - mod_m;

  const mod_n =
    (a * 6 +
      b * 5 +
      c * 4 +
      d * 3 +
      e * 2 +
      f * 9 +
      g * 8 +
      h * 7 +
      i * 6 +
      j * 5 +
      k * 4 +
      l * 3 +
      m * 2) %
    11;
  const expect_n = mod_n < 2 ? 0 : 11 - mod_n;

  return expect_m === m && expect_n === n;
};
