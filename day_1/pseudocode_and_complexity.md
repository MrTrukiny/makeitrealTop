# Exercise 1

Write a function called *repeatedChars* that receives two strings and returns a
new string with the characters that are repeated in both input strings:

```javascript
console.log(repeatedChars("german", "gabriela")); // "gear"
```

### Using empty string. Allowed more than one repeated character.

```
repeatedChars(str1, str2)

	newStr=""

	for each char1 in str1
		for each char2 in str2
			if char1 == char2
	  	  newStr += char1

	return newStr // "geraa"
```

### New way, using an empty object. Not allowed repeated characters.

```
repeatedChars(str1, str2)

	objComp = {}
	newStr = ""

	for each char1 in str1
		for each char2 in str2
			if char1 === char2 && !objComp[char1]
				objComp[char1] = true
				newStr += char1

	return newStr // "gera"
```
### Temporal complexity = O(n * m * min(n, m))
### Spatial complexity = O(min(n, m))

---------------------------------------------------------------------------
# Exercise 2

Write a function called *findLongestWordLength* that receives a string and
returns the length of the longest word in the sentence.
```javascript
console.log(findLongestWordLength("The quick brown fox jumped over the
lazy dog")); // 6
```
### Using a counter
```
findLongestWordLength(str)

maxLength = 0

words=str.split(" ") // array of words
for each word in words
   count = 0
   for each char in word
     count++
   if count>maxLength
     maxLength=count

return maxLength
```

### Compare each string length one by one
```
findLongestWordLength(str)

	words = str.split(" ") // array of words
	maxLength = 0

	for each word in words
		if word.length > maxLength
			maxLength = word.length

	return maxLength
```

### Temporal complexity = O(n * m) // split counts like a for
### Spatial complexity = O(max(n) + m) = O(2) // n = words, m = maxLength;

--------------------------------------------------------------------------
# Exercise 3

Write a function called *sort* that receives an array of numbers and return the
array in sorted order (ascending) without using the sort method.
```javascript
console.log(sort([5, 8, 3, 0, 7])); // [0, 3, 5, 7, 8]
```

### Bubble sort
```
sort(numArray)

	for  i=0;i<(longitud de numArray)-1;i++
		numero=numArray[i]
		pos1=i

		for j=i+1;j<longitud de numArray ; j++
		  si numero>numArray[j]
		    numero=numArray[j]
		    pos1=j

		temp=numArray[i]
		numarray[i]=numero
		numarray[pos1]=temp

	return numArray
```

### Temporal complexity = O(n^2)
### Spatial complexity = O(1)

--------------------------------------------------------------------------

# Exercise 4

Write a function called anagram that receives two strings and returns true if
the strings are anagrams, false otherwise.
Two words are anagrams if one of them has exactly same characters as that of
the another word
```javascript
console.log(anagram("anagram", "nagaram")); // true
console.log(anagram("hello", "world")); // false
```

### Using a counter to compare
```
anagram(str1, str2)

	if longitud de str1 != longitud de str2
	  return false

	count = 0
	for each char1 in str1
	  for each char2 in str2
	  	if char1 == char 2
	    	Detele char1 in str1
	      Delete char2 in str2
	      count++

	if count == longitud de str1
		return true

return false
```

### Using an empty Object
```
Anagram(s, t)

  if s.length !== t.length
   return false

  result={}

  for each elem in s
    if !result[elem]
     result[elem] = 1
    else
     result[elem] += 1
  for each elem in t
    if !result[elem]
     return false
    else
     result[elem] -= 1
  for each key in result
   if result[key] != 0
    return false

	return true
```
### Temporal complexity = O(n+m+o)
### Spatial complexity = O(n)

--------------------------------------------------------------------------

# Exercise 5

Write a function called tictactoe that receives a matrix and returns true if
it's winning for 'X' or 'O'.
```javascript
console.log(tictactoe([
  ['X', '', 'O'],
  ['', 'X', 'O'],
  ['O', '', 'X']
])); // true

console.log(tictactoe([
  ['O', 'X', 'O'],
  ['', 'X', 'O'],
  ['O', '', 'X']
])); // false
```
```
tictactoe(game)
  if (game[0][0]==game[1][0]) and (game[1][0]==game[2][0])
    return true

  else if (game[0][1]==game[1][1]) and (game[1][1]==game[2][1])
    return true

  else if (game[0][2]==game[1][2]) and (game[1][2]==game[2][2])
  	return true

  else if (game[0][0]==game[1][1]) and (game[1][1]==game[2][2])
    return true

	else if (game[0][2]==game[1][1]) and (game[1][1]==game[2][0])
  	return true

  else if (game[0][0]==game[0][1]) and (game[0][1]==game[0][2])
     return true

  else if (game[2][0]==game[2][1]) and (game[2][1]==game[2][2])
  	return true
  else if (game[1][0]==game[1][1]) and (game[1][1]==game[1][2])
  	return true
  else
      return false
```
### Temporal complexity = O(n)
### Spatial complexity = O(1)
