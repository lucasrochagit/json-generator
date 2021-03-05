const text = require('../../../src/lib/text');

describe('text', function () {
    describe('getText()', function () {
        describe('when get a random text with default config', function () {
            it('should return a random texting', function () {
                const result = text.getText('text');
                expect(result).toBeDefined();
            });
        });

        describe('when get a random text with custom config', function () {
            it('should return a random texting with custom paragraphs', function () {
                const result = text.getText('text;1');
                expect(result).toBeDefined();
            });

            it('should return a random texting with custom encode', function () {
                const result = text.getText('text;;5');
                expect(result).toBeDefined();
            });

            it('should return a random texting with custom encode', function () {
                const result = text.getText('text;;;6');
                expect(result).toBeDefined();
            });
        });

        describe('when does not inform the text tag', function () {
            it('should return undefined', function () {
                const result = text.getText('anything');
                expect(result).toBeUndefined();
            });
        });
    });
});
