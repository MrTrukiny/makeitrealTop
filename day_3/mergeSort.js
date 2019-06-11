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
  console.log(left, right)
  console.log(indexLeft, indexRight)
  console.log(left.slice(indexLeft), right.slice(indexRight))
  console.log(result)
  console.log(result.concat(left.slice(indexLeft).concat(right.slice(indexRight))))
  //return result.concat(left).concat(right)
  return result.concat(left.slice(indexLeft).concat(right.slice(indexRight)))
}

console.log(mergeSort([6, 2, 4, 1]));
console.log(mergeSort([7, -2, 5, 1, 3]));
