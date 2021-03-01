const lib = require('./src/lib');

exports = module.exports.generateJson = function (schema) {
    return lib.generateJson(schema);
};
