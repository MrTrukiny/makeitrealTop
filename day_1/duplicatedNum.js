function duplicatedNum(str) {
  let obj = {}
  str.split("").forEach(function(char) {
    if (obj.hasOwnProperty(char)) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  })
  console.log(obj);
  const llaves = Object.keys(obj);
  let count = 0;
  console.log(llaves);

  llaves.forEach(function(llave) {
    if (obj[llave] > 1) {
      count++
    }
  })
  return count;
}

console.log(duplicatedNum('abab')) //2
