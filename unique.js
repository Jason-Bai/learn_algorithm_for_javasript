const uniq = arr => {
  let hashTable = {};
  let data = [];
  for (let i in arr) {
    if (!hashTable[arr[i]]) {
      hashTable[arr[i]] = true;
      data.push(arr[i]);
    }
  }
  console.log(data);
  return data;
};

const unique = {
  uniq
};

module.exports = unique;
