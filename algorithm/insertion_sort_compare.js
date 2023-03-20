function insertionSort(array, compare) {
  //Start from the second element.
  for (let i = 1; i < array.length; i++) {
    //Go through the elements behind it.
    for (let j = i - 1; j > -1; j--) {
      if (compare(array[j], array[j + 1]) > 0) {
        //swap
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }

  return array;
}

console.log(insertionSort([23, 1, 10, 5, 2], (a, b) => a - b));
console.log(insertionSort([23, 1, 10, 5, 2], (a, b) => b - a));
