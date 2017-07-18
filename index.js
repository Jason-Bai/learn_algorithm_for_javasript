const palindrom = require("./palindrom");

const { checkPalindrom } = palindrom;

const str = "abccba";

const isPalindrom = checkPalindrom(str);

console.log(isPalindrom);
