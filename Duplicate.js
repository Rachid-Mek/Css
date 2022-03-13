
arr = [0, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9];
function removeDup() {
  var out = [];
  var k = 0;
  var len = arr.length;
  if (len >= 0) {
    for (let i = 0; i < len; i++) {
      if (arr[i] !== arr[i + 1]) {
        out[k] = arr[i];
        k++;
      }
    }
  }
  return out;
}
console.log(removeDup());
