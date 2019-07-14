function Person(name, weight, height) {
  this.name = name;
  this.sayHi = (greeting) => {
    return `Hola ${greeting}, me llamo ${this.name}.`;
  }
  this.bmi = () => {
    return weight / Math.pow(height, 2);
  }
}

const pedro = new Person("Pedro", 72, 1.5);

console.log(pedro.sayHi("María"));
console.log(pedro.bmi());