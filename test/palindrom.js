const assert = require('assert');
const palindrom = require('../palindrom');
const { checkPalindrom } = palindrom;

describe('Palindrom', () => {
  describe('#checkPalindrom', () => {
    it('should be true where str is palindrom', () => {
      const str = 'abccba';
      assert.equal(true, checkPalindrom(str));
    });
  });
});
