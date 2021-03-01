const utils = require('../util/lib.utils');
const jsonUtils = require('../util/json.utils');
const int = require('./int');

exports = module.exports.getRandom = function (cond) {
    if (!utils.isSameCondOp(cond, 'random')) {
        return;
    }

    const params = utils.getParams(cond);
    const list_str = params[1];


    if (!list_str || !jsonUtils.isValidJsonStr(list_str)) {
        return undefined;
    }

    const list = JSON.parse(list_str);
    const random_index = int.getInt(`int;0;${list.length - 1}`);

    return list[random_index];
};