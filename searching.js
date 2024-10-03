function linerSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (arr[mid] !== val && left <= right) {
    if (val < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return arr[mid] === val ? mid : -1;
}

module.export = {
  linerSearch,
  //binarySearch,
};
