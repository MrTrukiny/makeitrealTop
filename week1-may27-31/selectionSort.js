function selSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let minNum = arr[i];
    let swap = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (minNum > arr[j]) {
        minNum = arr[j];
        swap = j;
      }
    }
   	if (i !== swap) {
    	const tmp = arr[i];
      arr[i] = minNum;
      arr[swap] = tmp;
  	}
  }
  return arr
}

console.log(selSort([2, 7, 1, 9])) // [1, 2, 7, 9]