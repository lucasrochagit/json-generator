const id = require('../../../src/lib/id');

describe('id', function () {
    describe('getId()', function () {
        describe('when get id with default config', function () {
            it('should return the id as hex string', function () {
                const result = id.getId('id');
                expect(result).toBeDefined();
                expect(result).toMatch(/^[a-f\d]{24}$/i);
            });
        });

        describe('when get id with custom config', function () {
            it('should return a integer id', function () {
                const result = id.getId('id;int');
                expect(result).toBeDefined();
            });

            it('should return a objectId', function () {
                const result = id.getId('id;objectId');
                expect(result).toBeDefined();
                expect(result).toMatch(/^[a-f\d]{24}$/i);
            });

            it('should return a guid', function () {
                const result = id.getId('id;guid');
                expect(result).toBeDefined();
                expect(result).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
            });

            it('should return a id as hex string with custom size', function () {
                const result = id.getId('id;hex;11');
                expect(result).toBeDefined();
                expect(result).toMatch(/^[a-f\d]{11}$/i);
            });
        });

        describe('when does not inform the id tag', function () {
            it('should return undefined', function () {
                const result = id.getId('anything');
                expect(result).toBeUndefined();
            });
        });
    });
});
