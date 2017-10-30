const should = require('should');
const binarySearch = require('../programs/binarySearch');
const { indexOf } = binarySearch;

/* eslint no-undef: "off" */
describe('BinarySearch', () => {
  describe('#indexOf', () => {
    it('should be 1', () => {
      const arr = [1, 2, 3];
      const input = 2;
      should(1).eql(indexOf(arr, input));
    });

    it('should be -1', () => {
      const arr = [1, 2, 3];
      const input = -1;
      should(-1).eql(indexOf(arr, input));
    });
  });
});
