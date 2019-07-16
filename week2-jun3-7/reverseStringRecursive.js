const reverseStringRecursive= (string) => {
  return (string === '') ? '' : reverseStringRecursive(string.substr(1)) + string.charAt(0);
}

console.log(reverseStringRecursive("Hello")); // "olleH"
console.log(reverseStringRecursive("atacacata")); // "atacacata"
