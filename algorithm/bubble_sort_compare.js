function bubbleSort(array, compare) {
  for (let i = 0; i < array.length; i++) {
    let swap;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (compare(array[j], array[j + 1]) > 0) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
    if (swap == undefined) {
      break;
    }
  }
  return array;
}
console.log(bubbleSort([23, 1, 10, 5, 2], (a, b) => a - b));
console.log(bubbleSort([23, 1, 10, 5, 2], (a, b) => b - a));
