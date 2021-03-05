const random = require('../../../src/lib/random');


describe('random', function () {
    describe('getRandom()', function () {
        describe('when get a random item from a list', function () {
            it('should return a random item from list', function () {
                const result = random.getRandom('random;["a","b","c","d","e"]');
                expect(result).toBeDefined();
                expect([...'abcde']).toContain(result);
            });
        });

        describe('when the list is invalid', function () {
            it('should return undefined', function () {
                const result = random.getRandom('random;invalid');
                expect(result).toBeUndefined();
            });
        });

        describe('when the list is not a array', function () {
            it('should return undefined', function () {
                const result = random.getRandom('random;{"a": 1, "b":2}');
                expect(result).toBeUndefined();
            });
        });

        describe('when does not inform the random tag', function () {
            it('should return undefined', function () {
                const result = random.getRandom('anything');
                expect(result).toBeUndefined();
            });
        });
    });
});
