const address = require('../../../src/lib/address');

describe('address', function () {
    describe('getAddress', function () {
        describe('when get an address with default mask', function () {
            it('should return the address as string', function () {
                const result = address.getAddress('address');
                expect(result).toBeDefined();
            });
        });

        describe('when get an address with custom mask', function () {
            it('should return the address as string', function () {
                const result = address.getAddress('address;R. street, number - city. state, country');
                expect(result).toBeDefined();
            });
        });

        describe('when the custom mask does not have mapped keys', function () {
            it('should return the mask as it was sended', function () {
                const result = address.getAddress('address;anything');
                expect(result).toBeDefined();
                expect(result).toEqual('anything');
            });
        });


        describe('when does not inform the address tag', function () {
            it('should return undefined', function () {
                const result = address.getAddress('anything');
                expect(result).toBeUndefined();
            });
        });
    });
});
