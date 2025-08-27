function binary_search(x) {
  const numArray = [1, 21, 34, 41, 47, 67, 81, 92, 101];

  let left = 0;
  let right = numArray.length - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);

    if (numArray[midIndex] === x) {
      return numArray[midIndex];
    } else if (numArray[midIndex] < x) {
      left = midIndex + 1;
    } else if (numArray[midIndex] > x) {
      right = midIndex - 1;
    }
    console.log(left, right);
  }

  return -1;
}

console.log(binary_search(92));
