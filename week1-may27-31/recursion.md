# Recursion

## 1. Write a function called `factorial` that receives a number and returns the factorial of the number. The factorial is the multiplication of every positive number up to the number. For example, the factorial of 5 is 120 because `5 * 4 * 3 * 2 * 1 = 120`.

```javascript
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720
console.log(factorial(9)); // 362880
```
### Version One
```javascript
function factorial(num) {
  if (num == 0) {
    return 1;
  }
  return (num * factorial(--num))
}
```
### Version Two
```javascript
const factorial = (n) => {
  return n
    ? n * factorial(--n)
    : 1;
}
```

## 2. Write a function called `fibonacci` that receives a number and returns the `n` number of the [fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) sequence.

```javascript
console.log(fibonacci(0)); // 1
console.log(fibonacci(1)); // 1
console.log(fibonacci(4)); // 5
console.log(fibonacci(5)); // 8
```
### Iterative
```javascript
function fibonacci(num) {
  let a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a += b;
    b = temp;
    num--;
  }

  return b;
}
```
### Recursive
```javascript
function fibonacci(num) {
  if (num <= 1) {
    return 1;
  };
  return fibonacci(num - 1) + fibonacci(num - 2);
}
```
### Recursive (memoization)
```javascript
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
```
## 3. Write a function called `flatten` that receives an array of arrays and returns a flattened array.
```javascript
console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]
```

### Recursive
```javascript
function flatten(array) {
  return array.reduce((acc, item) => {
    return acc.concat(
      Array.isArray(item)
        ? flatten(item)
        : item
    );
  }, []);
}
```

## 4. Write a function called `collatz` that receives a number and returns the number of steps it takes to reach 1. **The Collatz Conjecture** (also called 3x + 1 problem) is the following:
```
Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is
odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely.
The conjecture states that no matter which number you start with, you will
always reach 1 eventually.
```
```javascript
console.log(collatz(12)); // 9
console.log(collatz(19)); // 20
console.log(collatz(27)); // 111
console.log(collatz(837799)); // 524
```

### Brute force-method
```javascript
let collatz = (num) => {
    // loop till the given num is not 1
    while(num != 1) {
      //print the num
      console.log(num);
      //if the number is even
      if (num % 2 == 0) {
        num = parseInt(num / 2);
      } else {
        //if the number is odd
        num = (num * 3) + 1;
      }
    }
  // print the last number
  console.log(num);
}
```

### Recursive
```javascript
let collatz = (num, store) => {
    store = store || [];
    //if num is 1 then store 1
    if (num === 1) {
        store.push(num);
        return store;
    //if num is even then store num / 2
    } else if (num % 2 === 0) {
        store.push(num);
        return collatz(parseInt(num / 2), store);
      //if num is odd then store num * 3 + 1
    } else {
        store.push(num);
        return collatz(3 * num + 1, store);
    }
};
```

## 5. Write a function called `pascal` that receives a number and returns a string with a **Pascal triangle**.

```javascript
console.log(pascal(2));
// 1
// 1 1

console.log(pascal(5));
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
```

### Recursive

```javascript
const pascal = (n, arr) => {
  if (!arr) arr = [[1]] // Create triangle
  if (n < 2) return arr // Exit

  const prevLine = arr[arr.length - 1] // Get previous line

  const newLine = [1] // Create new line

  // Populate new line
  prevLine.forEach((item, index) => {
    if (index === 0) {
      return;
    }
    if (index === prevLine.length) {
      return;
    }
    newLine.push(prevLine[index] + prevLine[index - 1])
  })

  newLine.push(1) // Finalise new line

  arr.push(newLine) // Insert new line to triangle

  return pascal(n - 1, arr) // Invoke itself passing the counter and array
}
```
