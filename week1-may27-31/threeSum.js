// Given an array of list of numbers, print out all the combinations of 3 numbers
// which when summed up equate to zero

function threeSum(arr, target) {
  result = [];
  for (i = 0; i < arr.length; i++) {
    let a = arr[i];
    for (j = i+1; j < arr.length; j++) {
      let b = arr[j];
      for (k = j+1; k < arr.length; k++) {
        let c = arr[k];
        let numbers = `${a}, ${b}, ${c}`;
        if (a + b + c === target &&
        result.indexOf(numbers) === -1) {
          result.push(numbers);
        }
      }
    }
  }
  if (result.length >= 1) {
    return result;
  } else {
    return -1
  }
}

console.log(threeSum([2, -1, -1], 0));
console.log(threeSum([-8, -7, 5 ,2, 2, -1, -1], 0));
