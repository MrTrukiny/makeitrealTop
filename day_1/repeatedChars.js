function repeatedChars(str1, str2) {
  let newStr = {};

    str1.split("")
      .forEach((char1) =>
        str2.split("").
          forEach((char2) => {
            if (char1 === char2 && !newStr[char1]) {
              newStr[char1] = true;
            }
          }
          )
      )
  return Object.keys(newStr).join("");
}

console.log(repeatedChars("german", "gabriela"))
