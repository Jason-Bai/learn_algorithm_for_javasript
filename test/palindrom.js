const should = require('should');
const palindrom = require('../programs/palindrom');
const { checkPalindrom } = palindrom;

/* eslint no-undef: "off" */
describe('Palindrom', () => {
  describe('#checkPalindrom', () => {
    it('should be true where str is a palindrom', () => {
      const str = 'abcba';
      const out = checkPalindrom(str);
      should(out).be.exactly(true);
    });

    it('should be false where str is not a palindrom', () => {
      const str = 'abcaba';
      const out = checkPalindrom(str);
      should(out).be.exactly(false);
    });
  });
});
