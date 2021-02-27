const str = require('./str');
const int = require('./int');
const utils = require('../util/lib.utils');
const stringUtils = require('../util/string.utils');
const lorem = require('../util/constants').lorem;

// text;paragraphs
exports = module.exports.getText = function (cond) {
  if (!utils.isSameCondOp(cond, 'text')) {
    return;
  }

  const default_paras_length = 5;

  const params = utils.getParams(cond);
  const params_paras = parseInt(params[1], 10);

  const paras_length = !!params_paras ? params_paras : default_paras_length;

  const paras = Array.from(Array(paras_length), function () {
    return getParas();
  });

  return paras.join('\n');
};

function getPhrase() {
  let words_per_phrase = int.getInt('int;6;12');
  while (words_per_phrase < 6) {
    words_per_phrase = int.getInt('int;6;12');
  }
  let words = [];
  for (let i = 0; i < words_per_phrase; i++) {
    const random_index = int.getInt(`int;0;${lorem.length}`);
    words.push(lorem[random_index]);
  }

  const first_word = stringUtils.onlyLetters(words[0]);
  const last_word = stringUtils.onlyLetters(words[words.length - 1]);

  words[0] = stringUtils.capitalize(first_word);
  words[words.length - 1] = last_word;

  const result = words.join(' ').concat('.');
  return result;
}

function getParas() {
  const phrases_per_para = 20;
  return Array.from(Array(phrases_per_para), function () {
    return getPhrase();
  }).join(' ');
}
