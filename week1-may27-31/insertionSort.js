function inSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let save = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > save; j--){
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = save;
  }
  return arr;
}

console.log(inSort([8, 9, 1])) // [1, 8, 9]