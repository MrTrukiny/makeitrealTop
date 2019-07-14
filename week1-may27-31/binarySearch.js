// Returns true if a number x is in the array, false otherwhise

const arr = [1, 3, 5, 7, 8, 9, 12],
      x = 5;
/* --- Recursive Method ---- */

const recursiveBinarySearch = (arr, x, left, right) => {

  // Check base case
  if (left > right) return false;

  // Find the middle index
  let mid = Math.floor((left + right)/2);
  //console.log(mid)

  // Compare mid with given key x
  if (arr[mid] === x) return true;

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) {
    return recursiveBinarySearch(arr, x, left, mid-1);
  } else {
    // If element at mid is smaller than x, 
    // search in the right half of mid 
    return recursiveBinarySearch(arr, x, mid+1, right);
  }
} 

console.log(recursiveBinarySearch(arr, x, 0, arr.length));

/* --- Iterative Method --- */

const iterativeBinarySearch = (arr, x) => { 
   
  let start = 0, 
      end= arr.length-1; 
  // Iterate while start not meets end 
  while (start<=end){ 

      // Find the mid index 
      let mid = Math.floor((start + end)/2); 
 
      // If element is present at mid, return True 
      if (arr[mid]===x) {
        return true; 
      } 
      // Else look in left or right half accordingly 
      else if (arr[mid] < x) {
        start = mid + 1; 
      } else {
        end = mid - 1; 
      }  
  } 
  return false; 
} 

console.log(iterativeBinarySearch(arr, x));