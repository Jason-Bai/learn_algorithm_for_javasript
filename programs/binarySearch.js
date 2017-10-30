function indexOf(arr = [], key = 0) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    const mid = lo + (hi - lo) / 2;
    if (key < arr[mid]) {
      hi = mid - 1;
    } else if (key > arr[mid]) {
      hi = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

const binarySearch = {
  indexOf
};

module.exports = binarySearch;
