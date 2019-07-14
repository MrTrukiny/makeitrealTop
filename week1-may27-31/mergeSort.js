function mergeSort(arr){ 
  if (arr.length === 1) {
   return arr
 }

 let middle = Math.floor(arr.length / 2) 
 let left = arr.slice(0, middle) 
 let right = arr.slice(middle) 

 return merge (
 mergeSort(left), 
 mergeSort(right) 
 )
}

function merge(left, right) { 
 result = []; 
 indexLeft = 0 
 indexRight = 0 

 while (indexLeft < left.length && indexRight < right.length) {
   if (left[indexLeft] < right[indexRight]){
     result.push(left[indexLeft]);
     indexLeft++
   } else {
     result.push(right[indexRight]);
     indexRight++
   }
 }
 return result.concat(left.slice(indexLeft).concat(right.slice(indexRight)))
}

console.log(mergeSort([6, 2, 4, 1]));
console.log(mergeSort([7, -2, 5, 1, 3]));