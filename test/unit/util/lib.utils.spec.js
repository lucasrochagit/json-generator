const libUtils = require('../../../src/util/lib.utils');

describe('libUtils', function () {
    describe('isSameCondOp()', function () {
        describe('when the operation is equals to condition', function () {
            it('should return true', function () {
                const result = libUtils.isSameCondOp('key;123', 'key');
                expect(result).toEqual(true);
            });
        });

        describe('when the operation is not equals to condition', function () {
            it('should return true', function () {
                const result = libUtils.isSameCondOp('another;123', 'key');
                expect(result).toEqual(false);
            });
        });
    });

    describe('getKey()', function () {
        describe('when recover a key from condition', function () {
            it('should return the operator', function () {
                const result = libUtils.getKey('key;123');
                expect(result).toEqual('key');
            });
        });

        describe('when condition is empty', function () {
            it('should return empty str', function () {
                const result = libUtils.getKey('');
                expect(result).toEqual('');
            });
        });
    });

    describe('isValidCond()', function () {
        describe('when condition is valid', function () {
            it('should return true', function () {
                const result = libUtils.isValidCond('int;0;10');
                expect(result).toEqual(true);
            });
        });

        describe('when condition is invalid', function () {
            it('should return false', function () {
                const result = libUtils.isValidCond('invalid;0;10');
                expect(result).toEqual(false);
            });
        });

        describe('when condition is empty', function () {
            it('should return false', function () {
                const result = libUtils.isValidCond('');
                expect(result).toEqual(false);
            });
        });
    });

    describe('getParams', function () {
        describe('when get params from condition', function () {
            it('should return a list of conditions', function () {
                const result = libUtils.getParams('int;0;10');
                expect(result).toMatchObject(['int', '0', '10']);
            });
        });

        describe('when conditions are empty', function () {
            it('should return a list with empty string', function () {
                const result = libUtils.getParams('');
                expect(result).toMatchObject(['']);
            });
        });
    });
});
