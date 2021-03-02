const str = require('./str');
const int = require('./int');
const libUtils = require('../util/lib.utils');
const stringUtils = require('../util/string.utils');
const lorem = require('../util/constants').lorem;

// text;paragraphs;phrases;words;
exports = module.exports.getText = function (cond) {
  if (!libUtils.isSameCondOp(cond, 'text')) {
    return;
  }

  const default_paras = 1;
  const default_phrases = 5;
  const default_words = 6;

  const params = libUtils.getParams(cond);
  const params_paras = parseInt(params[1], 10);
  const params_phrases = parseInt(params[2], 10);
  const params_words = parseInt(params[3], 10);

  const paras_length = !!params_paras ? params_paras : default_paras;
  const phrases_length = !!params_phrases ? params_phrases : default_phrases;
  const words_length = !!params_words ? params_words : default_words;

  const paras = Array.from(Array(paras_length), function () {
    return getParas(phrases_length, words_length);
  });

  return paras.join('\n');
};

function getPhrase(length) {
  const words = Array.from(Array(length), function () {
    const random_index = int.getInt(`int;0;${lorem.length}`);
    return lorem[random_index];
  });

  const first_word = stringUtils.onlyLetters(words[0]);
  const last_word = stringUtils.onlyLetters(words[words.length - 1]);

  words[0] = stringUtils.capitalize(first_word);
  words[words.length - 1] = last_word;

  const result = words.join(' ').concat('.');
  return result;
}

function getParas(length, wordsPerPhrase) {
  return Array.from(Array(length), function () {
    return getPhrase(wordsPerPhrase);
  }).join(' ');
}
