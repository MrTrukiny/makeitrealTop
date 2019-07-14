# 771. Jewels and Stones

```
numJewelsInStones(J, S)

count = 0

	for each char1 in J
  	for each char2 in S
    	if char1 == char2
      	count++

return count
```

## Temporal complexity = O(n * m)
## Spatial complexity = O(min(n, m))

```javascript
var numJewelsInStones = function(J, S) {

  let count = 0;
	for(let i=0;i<J.length;i++) {
  	    for(let j=0;j<S.length;j++){
            if (J[i] === S[j]) {
                count++
            }
        }
     }
	return count;

};
```

-------------------------------------------------

# 1. Two Sum
```
function twoSum(nums, target)

  newTarget = []
  for each char1 in nums
 		for each char2 in nums+1
    	if char1 + char 2 == target
      	newTarget.push(char1) //indices
        newTarget.push(char2)

  return newTarget
```

## Temporal complexity = O(n^2)
## Spatial complexity = O(2)

```javascript
var twoSum = function(nums, target) {
    newTarget = [];

	for (let i = 0; i < nums.length - 1; i++) {
  	    for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums [j] === target) {
                newTarget.push(i)
                newTarget.push(j)
      }
    }
  }
  return newTarget;
}
```
---------------------------------------------------

#242. Valid Anagram

```
isAnagram(s, t)

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
## Temporal complexity = O(n+m+o)
## Spatial complexity = O(n)

```javascript
var isAnagram = function(s, t) {

	if (s.length !== t.length) {
    return false
  }

  let result = {}

  for (let i = 0; i < s.length; i++) {
    if(!result[s[i]]) {
      result[s[i]] = 1;
    } else {
      result[s[i]] += 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if(!result[t[i]]) {
      return false;
    } else {
      result[t[i]] -= 1;
    }
  }
  for (let key in result) {
    if (result[key] !== 0) {
      return false;
    }
  }
  return true
};
```
