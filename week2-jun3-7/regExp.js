const regExp = {
  cardPlate: /[A-Z]{3}\d{3}/g,
  hexColor: /#([a-f\d]{3}$|[a-f\d]{6}$)/i,
  validDate: /[0-3]\d\/[0-1]\d\/\d{4}/
};
 
const testExp = {
  cardPlate: {
    one: "hello",
    two: "MVV387",
    three: "mvv387"
  },
  hexColor: {
    one: "#abc",
    two: "#f00",
    three: "#BADA55",
    four: "#C0FFEE",
    five: "#gac",
    six: "#f005"
  },
  validDate: {
    one: "12/12/2012",
    two: "24/08/1982",
    three: "99/11/2019",
    four: "hello"
  }
}

let keysRegExp = Object.keys(regExp)

// // Card Plates
// console.log(regExp.cardPlate.test(testExp.cardPlate.one))
// console.log(regExp.cardPlate.test(testExp.cardPlate.two))
// console.log(regExp.cardPlate.test(testExp.cardPlate.three))

// // Hex Colors
// console.log(regExp.hexColor.test(testExp.hexColor.one))
// console.log(regExp.hexColor.test(testExp.hexColor.two))
// console.log(regExp.hexColor.test(testExp.hexColor.three))
// console.log(regExp.hexColor.test(testExp.hexColor.four))
// console.log(regExp.hexColor.test(testExp.hexColor.five))
// console.log(regExp.hexColor.test(testExp.hexColor.six))

// // Valid Dates
// console.log(regExp.validDate.test(testExp.validDate.one))
// console.log(regExp.validDate.test(testExp.validDate.two))
// console.log(regExp.validDate.test(testExp.validDate.three))
// console.log(regExp.validDate.test(testExp.validDate.four))

const validate = () => {
  let keysRegExp = Object.keys(regExp)
  for (keysRegExp in testExp) {
    let reg = regExp[keysRegExp]
    console.log(reg)
    for (let i = 0; i < Object.keys(testExp[keysRegExp]).length; i++) {
      let keysTest = Object.keys(testExp[keysRegExp])
      let test = testExp[keysRegExp][keysTest[i]]
      console.log(test)
      console.log(reg.test(test))
    }
  }
}

validate();