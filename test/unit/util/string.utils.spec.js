const stringUtils = require('../../../src/util/string.utils');

describe('stringUtils', function () {
    describe('onlyLetters()', function () {
        describe('when get only letters from string', function () {
            it('should return only letters', function () {
                const result = stringUtils.onlyLetters('1a2b3c');
                expect(result).toEqual('abc');
            });
        });

        describe('when string does not have letters', function () {
            it('should return empty string', function () {
                const result = stringUtils.onlyLetters('123456');
                expect(result).toEqual('');
            });
        });
    });

    describe('onlyNumbers()', function () {
        describe('when get only numbers from string', function () {
            it('should return only numbers', function () {
                const result = stringUtils.onlyNumbers('1a2b3c');
                expect(result).toEqual('123');
            });
        });

        describe('when string does not have numbers', function () {
            it('should return empty string', function () {
                const result = stringUtils.onlyNumbers('abcde');
                expect(result).toEqual('');
            });
        });
    });

    describe('isLetter()', function () {
        describe('when the char is a letter', function () {
            it('should return true', function () {
                const result = stringUtils.isLetter('a');
                expect(result).toEqual(true);
            });
        });

        describe('when the char is not a letter', function () {
            it('should return false', function () {
                const result = stringUtils.isLetter('1');
                expect(result).toEqual(false);
            });
        });
    });

    describe('capitalize()', function () {
        describe('when the char is a letter', function () {
            it('should return the capitalized char', function () {
                const result = stringUtils.capitalize('something');
                expect(result).toEqual('Something');
            });
        });

        describe('when the char is not a letter', function () {
            it('should return the char', function () {
                const result = stringUtils.capitalize('12345');
                expect(result).toEqual('12345');
            });
        });
    });

});
