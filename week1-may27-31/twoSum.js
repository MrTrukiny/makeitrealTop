// Given an array of integers and a target sum, find all pairs that add up to
// the target sum. Return true if it's possible, false otherwise.

function twoSum(arr, target) {
  comps = {}; 
  results = [];
  arr.forEach((e) => {
    let comp = target - e
    if (comps[comp] !== undefined) {
      results.push([comps[comp], comp]);
    } else {
      comps[e] = comp;
    }
  })
  console.log(comps);
  console.log(results);
  if (results.length >= 1) {
    return true;
  }
  return false;
}

console.log(twoSum([1, 2, 4, 4], 8));
console.log(twoSum([1, 3, 7, 5], 8));
console.log(twoSum([9, 2, 4, 7], 8));
