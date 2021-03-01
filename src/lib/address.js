const utils = require('../util/lib.utils');
const constants = require('../util/constants');
const int = require('./int');

// address;mask(street, number - city - state - country)
exports = module.exports.getAddress = function (cond) {
    if (!utils.isSameCondOp(cond, 'address')) {
        return;
    }

    const default_mask = 'number street - city, state, country.';

    const params = cond.split(';');
    const params_mask = params[1];

    const random_index = int.getInt('int;0;49');
    let mask = !!params_mask ? params_mask : default_mask;

    if (mask.includes('number')) {
        mask = mask.replace('number', `${int.getInt('int;10;999')}`);
    }

    if (mask.includes('street')) {
        mask = mask.replace('street', constants.streets[random_index]);
    }

    if (mask.includes('city')) {
        mask = mask.replace('city', constants.cities[random_index]);
    }

    if (mask.includes('state')) {
        mask = mask.replace('state', constants.states[random_index]);
    }

    if (mask.includes('country')) {
        mask = mask.replace('country', constants.countries[random_index]);
    }

    return mask;
};
