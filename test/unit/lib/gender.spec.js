const gender = require('../../../src/lib/gender');

describe('gender', function () {
    describe('getGender', function () {
        describe('when get a gender', function () {
            it('should return a random gender', function () {
                const result = gender.getGender('gender');
                expect(result).toBeDefined();
                expect(['male', 'female']).toContain(result);
            });
        });

        describe('when does not inform the gender tag', function () {
            it('should return undefined', function () {
                const result = gender.getGender('anything');
                expect(result).toBeUndefined();
            });
        });
    });
});
