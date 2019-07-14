//EJERCICIO 1

class Car {
  constructor() {
    this.velocity = 0;
  }

  accelerate(val = 1) {
    this.velocity += val;
  }

  break(val = 1) {
    this.velocity -= val;
    if(this.velocity < 0) {
      this.velocity = 0;
    }
  }
}

class Bus extends Car {
  constructor() {
    super();
  }

  beep() {
    return 'BEEP!'
  }
}


//EJERCICIO 2
/*
function Vec(x,y) {
  this.x = x;
  this.y = y;
}
Vec.prototype.plus = function(vector){
  this.x = this.x + vector.x;
  this.y = this.y + vector.y;
}

Vec.prototype.minus = function(vector){
  this.x = this.x - vector.x;
  this.y = this.y - vector.y;
}

Vec.prototype.length = function(){
  return Math.sqrt((this.x ** 2)+(this.y ** 2));
}*/

class Vec {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    this.x = this.x + vector.x;
    this.y = this.y + vector.y;
    return this;  
  }

  minus(vector) {
    this.x = this.x - vector.x;
    this.y = this.y - vector.y;
    return this;
  }

  length() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2));
  }
}

let vec1 = new Vec(3, 4)
vec1.plus(new Vec(1, 2))
vec1.minus(new Vec(1, 2))
console.log(vec1);
vec1.length();
console.log(new Vec(3,5).plus(new Vec(5,6)))

/*Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.*/
/*class Group {
  // Your code here.
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false*/

class Group {
  constructor() {
    this.members = [];
  }

  add(num) {
    if(!this.members.includes(num)){
      this.members.push(num);
    }  
  }

  delete (num) {
    if(this.members.includes(num)) {
      this.members.splice(this.members.indexOf(num),1);
      return true;
    }
    return false;
  }

  has(num) {
    return this.members.includes(num);
  }
/*
  Group.from(obj) {

    for (let i = 0; i < obj.length; i++) {
    this.add(obj[i]);
  }
  
  }
}


/*

Group.prototype.add = function(num){

}

Group.prototype.delete = function(num){
  if(this.members.includes(num)){
    this.members.splice(this.members.indexOf(num),1);
    return true;
  }
  return false;
}

Group.prototype.has = function(num){
  return this.members.includes(num);
}

Group.prototype.from = function(obj){
  for(let i = 0; i < obj.length; i++){
    this.add(obj[i]);
  }
}
*/