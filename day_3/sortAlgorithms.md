## Insertion Sort

```javascript
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
```

## Selection Sort
```javascript
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
```

## Bubble sort
```javascript
function bubbleSort(arr){

  for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        let aux=arr[i]
        arr[i]=arr[j]
        arr[j]=aux
      }
    }
  }
  return arr
}

console.log(bubbleSort([2, 1, 3, 5, 4])) // 1
console.log(bubbleSort([2, 5, 1, 4, 3])) // -1
console.log(bubbleSort([5, 1, 2, 3, 6, 4])) // -1
```

## Merge sort
```javascript
function mergeSort(arr){ // [6, 2, 4, 1]
 	if (arr.length === 1) {
    return arr
  }

	let middle = Math.floor(arr.length / 2) // 2
  let left = arr.slice(0, middle) // [6, 2] -> [6] -> [4]
  let right = arr.slice(middle) // [4, 1] -> [2] -> [1]

  return merge (
  mergeSort(left), //[6] -> [4] -> [4]
  mergeSort(right) //[2] -> [1] -> [1]
  )
}

function merge(left, right) { // ([6], [2]) -> ([4], [1])
  result = []; // [2] -> [1]
  indexLeft = 0 //
  indexRight = 0 // 1, 1

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]){
      result.push(left[indexLeft]);
      indexLeft++
    } else {
      result.push(right[indexRight]);
      indexRight++
    }
  }
  //return result.concat(left).concat(right)
  return result.concat(left.slice(indexLeft).concat(right.slice(indexRight)))
}

console.log(mergeSort([6, 2, 4, 1]));
console.log(mergeSort([7, -2, 5, 1, 3]));
```

## Buble sort (bonus)
```javascript
function bubble(arr){

	obj = {};
  for(let i=0;i<arr.length-1;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
      if (!obj[arr[i]]) {
        obj[arr[i]] = 1;
      } else {
        obj[arr[i]] += 1;
      }
      let aux=arr[i]
      arr[i]=arr[j]
      arr[j]=aux
    }
  }
 }
  keys = Object.keys(obj)
  for (keys in obj) {
    if(obj[keys] > 2) {
    return -1
    }
  }
	return 1
}

console.log(bubble([2, 1, 3, 5, 4])) // 1
console.log(bubble([2, 5, 1, 4, 3])) // -1
console.log(bubble([5, 1, 2, 3, 6, 4])) // -1
```
