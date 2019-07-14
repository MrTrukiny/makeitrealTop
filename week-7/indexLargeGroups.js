// In a string S of letters, these letters form consecutive groups of the same character.
// For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".
// Call a group large if it has 3 or more characters.  We would like the starting
// and ending positions of every large group.

/* Example 1:

Input: "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.
Example 2:

Input: "abc"
Output: []
Explanation: We have "a","b" and "c" but no large group.
Example 3:

Input: "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]] */

/* indexLargeGroups(S)
  result = [];
  indexFirst = 0;
  indexLast = 0;
  countChar = 1;
  S.split('');
  for (i) in S
    if S[i] == S[i+1]
      if countChar >= 3 && S[i+1] != S[i+2]
        indexLast = S[i+1];
        result.push([indexFirst, indexLast])
        countChar = 1
      else if cuntChar > 1
      countChar++
      else 
      indexFirst =  S.indexOf(S[i]);
      countChar++ */
      
      const indexLargeGroups = (S) => {
        let result = [], 
            indexFirst = 0,
            indexLast = 0,
            countChar = 1
        for (let i = 0; i < S.length; i++) {
          if (S[i] === S[i+1]) {
            if (countChar == 1) {
              indexFirst = i;
            }
            countChar++
          } else if (countChar >= 3) {
            indexLast = i;
            result.push([indexFirst, indexLast])
            countChar = 1;
          } else {
          countChar = 1;
          }
        }
        return result
      }
      
      console.log(indexLargeGroups("abcdddeeeeaabbbcd"));