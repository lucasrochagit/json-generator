const int = require('../../../src/lib/int');

describe('int', function () {
    describe('getInt()', function () {
        describe('when get int with default config', function () {
            it('should return a int number', function () {
                const result = int.getInt('int');
                expect(result).toBeDefined();
                expect(typeof result).toBe('number');
            });
        });

        describe('when get int with custom config', function () {
            it('should return a int number greater than min value', function () {
                const result = int.getInt('int;10');
                expect(result).toBeDefined();
                expect(typeof result).toBe('number');
                expect(result).toBeGreaterThanOrEqual(10);
            });

            it('should return a int number less than max value', function () {
                const result = int.getInt('int;;32');
                expect(result).toBeDefined();
                expect(typeof result).toBe('number');
                expect(result).toBeLessThanOrEqual(32);
            });

            it('should return a int number between two values', function () {
                const result = int.getInt('int;5;27');
                expect(result).toBeDefined();
                expect(typeof result).toBe('number');
                expect(result).toBeGreaterThanOrEqual(5);
                expect(result).toBeLessThanOrEqual(27);
            });

            it('should return a int number between two values with specific decimals', function () {
                const result = int.getInt('int;12;46;3');
                expect(result).toBeDefined();
                expect(typeof result).toBe('number');
                expect(result).toBeGreaterThanOrEqual(12);
                expect(result).toBeLessThanOrEqual(46);
            });
        });

        describe('when does not inform the int tag', function () {
            it('should return undefined', function () {
                const result = int.getInt('anything');
                expect(result).toBeUndefined();
            });
        });
    });
});
