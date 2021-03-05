const money = require('../../../src/lib/money');

describe('money', function () {
    describe('getMoney()', function () {
        describe('when get mask int with default config', function () {
            it('should return the default mask int string', function () {
                const result = money.getMoney('money');
                expect(result).toBeDefined();
                expect(result).toMatch(/^\R\$ \d{1}\.\d{3}\,\d{2}$/);
            });
        });

        describe('when get mask int with custom config', function () {
            it('should return a mask int with custom mask', function () {
                const result = money.getMoney('money;U$ ###,###.##');
                expect(result).toBeDefined();
                expect(result).toMatch(/^\U\$ \d{3}\,\d{3}\.\d{2}$/);
            });
        });

        describe('when does not inform the money tag', function () {
            it('should return undefined', function () {
                const result = money.getMoney('anything');
                expect(result).toBeUndefined();
            });
        });
    });
});
