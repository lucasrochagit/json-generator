const libUtils = require('../util/lib.utils');
const numberUtils = require('../util/number.utils');
const int = require('./int');

// maskInt;mask(####-####)
exports = module.exports.getMaskInt = function (cond) {
    if (!libUtils.isSameCondOp(cond, 'maskInt')) {
        return;
    }

    const default_mask = '####-####';

    const params = cond.split(';');
    const params_mask = params[1];
    const mask = !!params_mask ? params_mask : default_mask;

    const chars = [...mask];

    const mask_result = chars.map(function (char) {
        if (char !== '#') {
            const int_char = parseInt(char, 10);
            if (numberUtils.isInteger(int_char)) {
                return int_char;
            }
            return char;
        }
        return int.getInt('int;0;9');
    });
    return mask_result.join('');
};
