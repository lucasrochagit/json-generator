const numberUtils = require('../../../src/util/number.utils');

describe('numberUtils', function () {
    describe('isBetween()', function () {
        describe('when the number is between two numbers', function () {
            it('should return true', function () {
                const result = numberUtils.isBetween(0, 10, 5);
                expect(result).toEqual(true);
            });
        });

        describe('when the number is not between two numbers', function () {
            it('should return false', function () {
                const result = numberUtils.isBetween(0, 10, 15);
                expect(result).toEqual(false);
            });
        });
    });

    describe('isInteger()', function () {
        describe('when the value is integer', function () {
            it('should return true', function () {
                const result = numberUtils.isInteger(1);
                expect(result).toEqual(true);
            });
        });

        describe('when the value is not a integer', function () {
            it('should return false', function () {
                const result = numberUtils.isInteger('1');
                expect(result).toEqual(false);
            });
        });

        describe('when the value is not a integer but is a number', function () {
            it('should return false', function () {
                const result = numberUtils.isInteger(1.5);
                expect(result).toEqual(false);
            });
        });
    });
});
