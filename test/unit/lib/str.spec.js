const str = require('../../../src/lib/str');

describe('str', function () {
    describe('getStr()', function () {
        describe('when get a random str with default config', function () {
            it('should return a random string', function () {
                const result = str.getStr('str');
                expect(result).toBeDefined();
                expect(result).toMatch(/^[a-f\d]{36}$/i);
            });
        });

        describe('when get a random str with custom config', function () {
            it('should return a random string with custom length', function () {
                const result = str.getStr('str;12');
                expect(result).toBeDefined();
                expect(result).toMatch(/^[a-f\d]{12}$/i);
            });

            it('should return a random string with custom encode', function () {
                const result = str.getStr('str;;ascii');
                expect(result).toBeDefined();
                expect(result).toMatch(/^[\x00-\x7F]*$/);
            });
        });

        describe('when does not inform the str tag', function () {
            it('should return undefined', function () {
                const result = str.getStr('anything');
                expect(result).toBeUndefined();
            });
        });
    });
});
