// @format
const should = require('should');
const unique = require('../unique');
const { uniq } = unique;

describe('Unique', () => {
  describe('#uniq', () => {
    it('should be [1, 2] where arr is [1, 2]', () => {
      const input = [1, 2];
      const expect = [1, 2];
      expect.should.eql(uniq(input));
    });

    it('should be [1, 2] where arr is [1, 2, 2]', () => {
      const input = [1, 2, 2];
      const expect = [1, 2];
      expect.should.eql(uniq(input));
    });
  });
});