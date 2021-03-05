const name = require('../../../src/lib/name');

describe('name', function () {
    describe('getFirstName()', function () {
        describe('when get a random first name', function () {
            it('should return a random first name', function () {
                const result = name.getFirstName('firstName');
                expect(result).toBeDefined();
            });
        });

        describe('when does not inform the firstName tag', function () {
            it('should return undefined', function () {
                const result = name.getFirstName('anything');
                expect(result).toBeUndefined();
            });
        });
    });

    describe('getLastName()', function () {
        describe('when get a random last name', function () {
            it('should return a random last name', function () {
                const result = name.getLastName('lastName');
                expect(result).toBeDefined();
            });
        });

        describe('when does not inform the lastName tag', function () {
            it('should return undefined', function () {
                const result = name.getLastName('anything');
                expect(result).toBeUndefined();
            });
        });
    });

    describe('getFullName', function () {
        describe('when get a random full name with default config', function () {
            it('should return a random full name', function () {
                const result = name.getFullName('fullName');
                expect(result).toBeDefined();
            });
        });

        describe('when get a random full name with custom config', function () {
            it('should return a random full name with first name defined', function () {
                const result = name.getFullName('fullName;Joan');
                expect(result).toBeDefined();
                expect(result.split(' ')[0]).toMatch('Joan');
            });

            it('should return a random full name with last name defined', function () {
                const result = name.getFullName('fullName;;Rios');
                expect(result).toBeDefined();
                expect(result.split(' ')[1]).toMatch('Rios');
            });
        });

        describe('when does not inform the fullName tag', function () {
            it('should return undefined', function () {
                const result = name.getFullName('anything');
                expect(result).toBeUndefined();
            });
        });
    });
});
