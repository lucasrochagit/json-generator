const maskInt = require('../../../src/lib/mask.int');

describe('maskInt', function () {
    describe('getMaskInt()', function () {
        describe('when get mask int with default config', function () {
            it('should return the default mask int string', function () {
                const result = maskInt.getMaskInt('maskInt');
                expect(result).toBeDefined();
                expect(result).toMatch(/^\d{4}-\d{4}$/);
            });
        });

        describe('when get mask int with custom config', function () {
            it('should return a mask int with custom mask', function () {
                const result = maskInt.getMaskInt('maskInt;###.#1#,##');
                expect(result).toBeDefined();
                expect(result).toMatch(/^\d{3}\.\d{3}\,\d{2}$/);
            });
        });

        describe('when does not inform the maskInt tag', function () {
            it('should return undefined', function () {
                const result = maskInt.getMaskInt('anything');
                expect(result).toBeUndefined();
            });
        });
    });
});
