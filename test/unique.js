const should = require('should');
const unique = require('../unique');
const { uniq } = unique;

/* eslint no-undef: "off" */
describe('Unique', () => {
  describe('#uniq', () => {
    it('should be [1, 2] where arr is [1, 2]', () => {
      const input = [1, 2];
      should([1, 2]).eql(uniq(input));
    });

    it('should be [1, 2] where arr is [1, 2, 2]', () => {
      const input = [1, 2, 2];
      should([1, 2]).eql(uniq(input));
    });
  });
});
