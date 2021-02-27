const utils = require('../util/lib.utils');
const names = require('../util/constants').full_names_list;
const int = require('./int');

exports = module.exports.getFirstName = function (cond) {
  if (!utils.isSameCondOp(cond, 'firstName')) {
    return;
  }

  const index = int.getInt('int;0;49');
  return names[index].split(' ')[0];
};

exports = module.exports.getLastName = function (cond) {
  if (!utils.isSameCondOp(cond, 'lastName')) {
    return;
  }

  const index = int.getInt('int;0;49');
  return names[index].split(' ')[1];
};

// fullName;firstName;lastName
exports = module.exports.getFullName = function (cond) {
  if (!utils.isSameCondOp(cond, 'fullName')) {
    return;
  }

  const params = utils.getParams(cond);
  const params_first_name = params[1];
  const params_last_name = params[2];

  const index = int.getInt('int;0;49');
  const mock_name = names[index].split(' ');

  if (params_first_name) {
    mock_name[0] = params_first_name;
  }

  if (params_last_name) {
    mock_name[1] = params_last_name;
  }

  return mock_name.join(' ');
};
