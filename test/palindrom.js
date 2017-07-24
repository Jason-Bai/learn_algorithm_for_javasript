const should = require('should');
const palindrom = require('../palindrom');
const { checkPalindrom } = palindrom;

/* eslint no-undef: "off" */
describe('Palindrom', () => {
  describe('#checkPalindrom', () => {
    it('should be true where str is palindrom', () => {
      const str = 'abcba';
      const out = checkPalindrom(str);
      should(out).be.exactly(true);
    });

    it('should be false where str is not palindrom', () => {
      const str = 'abaeba';
      const out = checkPalindrom(str);
      should(out).be.exactyly(false);
    });
  });
});
