// @format
const should = require('should');
const palindrom = require('../palindrom');
const { checkPalindrom } = palindrom;

describe('Palindrom', () => {
  describe('#checkPalindrom', () => {
    it('should be true where str is palindrom', () => {
      const str = 'abcba';
      const out = checkPalindrom(str);
      const expect = true;
      (out === expect).should.be.true;
    });

    it('should be false where str is not palindrom', () => {
      const str = 'abaeba';
      const out = checkPalindrom(str);
      const expect = false;
      (out === expect).should.be.true;
    });
  });
});
