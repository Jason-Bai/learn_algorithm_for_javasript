// @format
const palindrom = require('./palindrom');
const unique = require('./unique');

const { checkPalindrom } = palindrom;
const { uniq } = unique;

const str = 'abcba';

const isPalindrom = checkPalindrom(str);

const result = uniq([1, 2, 2]);

console.log(isPalindrom);

console.log(result);
