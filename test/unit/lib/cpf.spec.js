const cpf = require('../../../src/lib/cpf');
const stringUtils = require('../../../src/util/string.utils');

describe('cpf', function () {
    describe('getCpf()', function () {
        describe('when get cpf with default config', function () {
            it('should return the cpf with mask', function () {
                const result = cpf.getCpf();
                expect(result).toBeDefined();
                expect(result).toMatch(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);
            });
        });

        describe('when get cpf without mask', function () {
            it('should return only cpf numbers', function () {
                const result = cpf.getCpf(false);
                expect(result).toBeDefined();
                expect(result).toMatch(/^\d{11}$/);
            });
        });
    });

    describe('isValidCpf()', function () {
        describe('when validate a default and valid cpf str', function () {
            it('should return true', function () {
                const cpf_data = '323.599.410-62';
                const result = cpf.isValidCpf(cpf_data);
                expect(result).toEqual(true);
            });
        });

        describe('when the cpf is not a string', function () {
            it('should return false', function () {
                const cpf_data = 32359941062;
                const result = cpf.isValidCpf(cpf_data);
                expect(result).toEqual(false);
            });
        });

        describe('when validate a only-numbers valid cpf', function () {
            it('should return true', function () {
                const cpf_data = '32359941062';
                const result = cpf.isValidCpf(cpf_data);
                expect(result).toEqual(true);
            });
        });

        describe('when the cpf is invalid from first verifying digit', function () {
            it('should return false', function () {
                const cpf_data = '32359941052';
                const result = cpf.isValidCpf(cpf_data);
                expect(result).toEqual(false);
            });
        });

        describe('when the cpf is invalid from second verifying digit', function () {
            it('should return false', function () {
                const cpf_data = '32359941061';
                const result = cpf.isValidCpf(cpf_data);
                expect(result).toEqual(false);
            });
        });

        describe('when the cpf is invalid for does not have 11 chars', function () {
            it('should return false', function () {
                const cpf_data = '123456789';
                const result = cpf.isValidCpf(cpf_data);
                expect(result).toEqual(false);
            });
        });
    });
});
