function isBalancedRecursive(str, stack = []){
  const open = new Set(['('])
  const close = new Set([')'])
  const pairs = { '{':'}', '[':']', '(': ')' }
  const next = str[0]

  if(str === '') {
    // false if ran out of string and something is on the stack
    return !stack.length
  } else if(close.has(next) && pairs[stack.pop()] !== next) {
    // false if the closing doesn't match the top of the stack
    return false
  } else if(open.has(next)) {
    // it's an opener, push into the stack
    stack.push(next)
  } else {
    // Do nothing, it's not a bracket of any sort
  }
  // Do the same with the next sequence
  return isBalancedRecursive(str.slice(1), stack)
}

console.log(isBalancedRecursive('')); // true
console.log(isBalancedRecursive('()')); // true
console.log(isBalancedRecursive(')()')); // false
console.log(isBalancedRecursive("(((())))")); // true
console.log(isBalancedRecursive("(((()))")); // false
console.log(isBalancedRecursive("())(()")); // false