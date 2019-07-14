// A self-dividing number is a number that is divisible by every digit it contains.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number
// including the bounds if possible.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Example 1:
// Input:
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

/*
selfDividing(left, right)

  output = [];
  for i letf to right
    if i < 10
      output.push(i)
    else if i > 10
      let temp = i.toString()
      comp = temp.lentgth
      for (j = 0; j < comp; i++)
        count = 0;
        if temp(j) % i == 0
          count++
      
        if count == comp
          output.push(i)
          
return output
*/

const selfDividing = (left, right) => {
  let output = [];
  let temp = "";
  for (let i = left; i <= right; i++) {
    if (i < 10) {
      output.push(i)
    } else {
      temp = i.toString();
      comp = temp.length;
      let count = 0;
      for (let j = 0; j < comp; j++) {
        if (i % parseInt(temp[j]) === 0) {
          count++
        }
      }
      if (count === comp) {
        output.push(i)
      }
    } 
  }
  return output;
}

console.log(selfDividing(1, 22));