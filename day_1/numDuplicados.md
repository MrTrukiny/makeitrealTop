## Escribir el pseudocódigo con complejidad O(n) del algoritmo
## de número de caracteres duplicados

Escribe una función llamada numDuplicados que reciba un string y retorne
el número de caracteres que aparecen más de una vez.

```javascript
console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0
```
#### Pseudocode
```
numDuplicados(str)

obj = {}
for each char in str
	if obj.hasOwnProperty(char)
    obj[char] += 1
  else
  	obj[char] = 1

llaves = Object.keys(obj)
count = 0

for each llave in llaves
  if obj[llave] > 1
   count++

return count
```
#### JavaScript wit For Loops
```JavaScript
function numDuplicados(str){
    obj = {};
    for(let i = 0; i < str.length; i++) {
      if(obj.hasOwnProperty(str[i])){
        obj[str[i]] += 1;
      } else {
        obj[str[i]] = 1;
      }
    }

    let count = 0;
    let keys = Object.keys(obj);

    for (let j=0; j < keys.length; j++) {
      if(obj[keys[j]] > 1){
        count++
      }
    }
    return count;
}

console.log(numDuplicados('ababaaaaccdd'));
```
## Temporal complexity = O(n + m)
## Spatial complexity = O(1)

#### JavaScript with split and forEach methods

```javascript
function numDuplicados(str) {
  let obj = {}
  str.split("").forEach(function(char) {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  })

  const keys = Object.keys(obj);
  let count = 0;

  llaves.forEach(function(key) {
    if (obj[key] > 1) {
      count++
    }
  })
  return count;
}
```
## Temporal complexity = O(n + m + o) // o = split, it counts like a for
## Spatial complexity = O(1) // Just one Object
