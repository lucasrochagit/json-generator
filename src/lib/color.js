const libUtils = require('../util/lib.utils');
const constants = require('../util/constants');
const int = require('./int');

exports = module.exports.getColor = function (cond) {
    if (!libUtils.isSameCondOp(cond, 'color')) {
        return;
    }

    const index = int.getInt(`int;0;${constants.colors.length - 1}`);
    return constants.colors[index];
};
