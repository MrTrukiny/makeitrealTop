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

function Auto() {
  this.velocity = 0;
}

Auto.prototype.accelerate = function(num) {
  this.velocity += num;
}

Auto.prototype.brake = function(num) {
  this.velocity -= num;
  if (this.velocity < 0) this.velocity = 0;
}

const a1 = new Auto();

console.log(a1)

console.log(a1.velocity); // 0
a1.accelerate(1)
a1.accelerate(2)
console.log(a1.velocity); // 3
a1.brake(2);
console.log(a1.velocity); // 1
a1.brake(3);
console.log(a1.velocity); //0
