const jsonUtils = require('../../../src/util/json.utils');

describe('jsonUtils', function () {
    describe('isValidJsonStr()', function () {
        describe('when verify a valid json', function () {
            it('should return true', function () {
                const result = jsonUtils.isValidJsonStr('{"a": 1}');
                expect(result).toEqual(true);
            });
        });

        describe('when verify a invalid json', function () {
            it('should return false', function () {
                const result = jsonUtils.isValidJsonStr('invalid');
                expect(result).toEqual(false);
            });
        });
    });
});
