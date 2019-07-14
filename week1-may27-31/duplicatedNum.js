function duplicatedNum(str) {
  let obj = {}
  str.split("").forEach((char) => {
    if (obj.hasOwnProperty(char)) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  })
  const keys = Object.keys(obj);
  let count = 0;

  keys.forEach((key) => {
    if (obj[key] > 1) {
      count++
    }
  })
  return count;
}

console.log(duplicatedNum('abab')) //2
