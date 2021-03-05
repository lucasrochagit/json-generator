const cnpj = require('../../../src/lib/cnpj');
describe('cnpj', function () {
    describe('getCnpj', function () {
        describe('when get cnpj with default config', function () {
            it('should return the cnpj with mask', function () {
                const result = cnpj.getCnpj();
                expect(result).toBeDefined();
                expect(result).toMatch(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/);
            });
        });

        describe('when get cnpj without mask', function () {
            it('should return only cnpj numbers', function () {
                const result = cnpj.getCnpj(false);
                expect(result).toBeDefined();
                expect(result).toMatch(/^\d{14}$/);
            });
        });
    });

    describe('isValidCnpj()', function () {
        describe('when validate a default and valid cnpj str', function () {
            it('should return true', function () {
                const cnpj_data = '14.644.813/0001-29';
                const result = cnpj.isValidCnpj(cnpj_data);
                expect(result).toEqual(true);
            });
        });

        describe('when validate a only-numbers valid cnpj', function () {
            it('should return true', function () {
                const cnpj_data = '14644813000129';
                const result = cnpj.isValidCnpj(cnpj_data);
                expect(result).toEqual(true);
            });
        });

        describe('when the cpnj is not a string', function () {
            it('should return false', function () {
                const cnpj_data = 14644813000129;
                const result = cnpj.isValidCnpj(cnpj_data);
                expect(result).toEqual(false);
            });
        });

        describe('when the cnpj is invalid from first verifying digit', function () {
            it('should return false', function () {
                const cnpj_data = '14644813000119';
                const result = cnpj.isValidCnpj(cnpj_data);
                expect(result).toEqual(false);
            });
        });

        describe('when the cnpj is invalid from second verifying digit', function () {
            it('should return false', function () {
                const cnpj_data = '14644813000128';
                const result = cnpj.isValidCnpj(cnpj_data);
                expect(result).toEqual(false);
            });
        });

        describe('when the cnpj is invalid for does not have 11 chars', function () {
            it('should return false', function () {
                const cnpj_data = '123456789';
                const result = cnpj.isValidCnpj(cnpj_data);
                expect(result).toEqual(false);
            });
        });
    });
});
