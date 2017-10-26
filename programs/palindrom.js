// 判断一个单词是否是回文
checkPalindrom = str =>
  str ===
  str
    .split('')
    .reverse()
    .join('');

const palindrom = {
  checkPalindrom
};

module.exports = palindrom;
