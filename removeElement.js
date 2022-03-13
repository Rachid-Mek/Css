
arr = [0, 1, 1, 4, 8, 5, 3, 5];
function removeItem(item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      for (let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
        i--;
      }
      arr.length -= 1;
    }
  }
  return arr;
}
console.log(removeItem(5));
