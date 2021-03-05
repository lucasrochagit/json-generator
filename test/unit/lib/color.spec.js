const color = require('../../../src/lib/color');
const constants = require('../../../src/util/constants');

describe('color', function () {
    describe('getColor', function () {
        describe('when get a color', function () {
            it('should return a random color', function () {
                const result = color.getColor('color');
                expect(result).toBeDefined();
                expect(constants.colors).toContain(result);
            });
        });

        describe('when does not inform the color tag', function () {
            it('should return undefined', function () {
                const result = color.getColor('anything');
                expect(result).toBeUndefined();
            });
        });
    });
});
