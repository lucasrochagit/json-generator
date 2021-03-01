exports = module.exports.isValidJsonStr = function (str) {
    try {
        return typeof JSON.parse(str) === 'object';
    } catch (e) {
        return false;
    }
}