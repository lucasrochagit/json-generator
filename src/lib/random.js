const libUtils = require('../util/lib.utils');
const jsonUtils = require('../util/json.utils');
const int = require('./int');

// random;[list_of_foo]
exports = module.exports.getRandom = function (cond) {
    if (!libUtils.isSameCondOp(cond, 'random')) {
        return;
    }

    const params = libUtils.getParams(cond);
    const list_str = params[1];

    if (!list_str || !jsonUtils.isValidJsonStr(list_str)) {
        return undefined;
    }

    const list = JSON.parse(list_str);

    if (!(list instanceof Array)) {
        return undefined;
    }
    const random_index = int.getInt(`int;0;${list.length - 1}`);

    return list[random_index];
};
