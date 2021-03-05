const float = require('../../../src/lib/float');

describe('float', function () {
    describe('getFloat()', function () {
        describe('when get float with default config', function () {
            it('should return a float number', function () {
                const result = float.getFloat('float');
                expect(result).toBeDefined();
                expect(typeof result).toBe('number');
            });
        });

        describe('when get float with custom config', function () {
            it('should return a float number greater than min value', function () {
                const result = float.getFloat('float;10');
                expect(result).toBeDefined();
                expect(typeof result).toBe('number');
                expect(result).toBeGreaterThanOrEqual(10);
            });

            it('should return a float number less than max value', function () {
                const result = float.getFloat('float;;32');
                expect(result).toBeDefined();
                expect(typeof result).toBe('number');
                expect(result).toBeLessThanOrEqual(32);
            });

            it('should return a float number between two values', function () {
                const result = float.getFloat('float;5;27');
                expect(result).toBeDefined();
                expect(typeof result).toBe('number');
                expect(result).toBeGreaterThanOrEqual(5);
                expect(result).toBeLessThanOrEqual(27);
            });

            it('should return a float number between two values with specific decimals', function () {
                const result = float.getFloat('float;12;46;3');
                expect(result).toBeDefined();
                expect(typeof result).toBe('number');
                expect(result).toBeGreaterThanOrEqual(12);
                expect(result).toBeLessThanOrEqual(46);
            });
        });

        describe('when does not inform the float tag', function () {
            it('should return undefined', function () {
                const result = float.getFloat('anything');
                expect(result).toBeUndefined();
            });
        });
    });
});
