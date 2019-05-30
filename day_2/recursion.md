# Recursion

1. Write a function called `factorial` that receives a number and returns the
factorial of the number. The factorial is the multiplication of every positive
number up to the number. For example, the factorial of 5 is 120 because
`5 * 4 * 3 * 2 * 1 = 120`.

```javascript
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720
console.log(factorial(9)); // 362880
```

function factorial(num) {
  if (num == 0) {
    return 1;
  }
  return (num * factorial(--num))
}

function factorial(n) {
  return n
    ? n * factorial(--n)
    : 1;
}

console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720
console.log(factorial(9)); // 362880

2. Write a function called `fibonacci` that receives a number and returns
the `n` number of the [fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) sequence.

```javascript
console.log(fibonacci(0)); // 1
console.log(fibonacci(1)); // 1
console.log(fibonacci(4)); // 5
console.log(fibonacci(5)); // 8
```

function fibonacci(n) {
  if (n < 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(0)); // 1
console.log(fibonacci(1)); // 1
console.log(fibonacci(4)); // 5
console.log(fibonacci(5)); // 8
console.log(fibonacci(6)); // 8
