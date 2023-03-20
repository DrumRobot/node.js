function insertionSort(array) {
  //Start from the second element.
  for (let i = 1; i < array.length; i++) {
    //Go through the elements behind it.
    for (let j = i - 1; j > -1; j--) {
      //value comparison using ascending order.
      if (array[j + 1] < array[j]) {
        //swap
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
    console.log(`${i}회전: ${array}`);
  }

  return array;
}

console.log(insertionSort([23, 1, 10, 5, 2]));
