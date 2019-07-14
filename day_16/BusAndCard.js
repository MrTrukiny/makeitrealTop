let Car = function(){
    this.velocity = 0;
  }
  
  Car.prototype.accelerate = function(num){
    this.velocity += num;
    console.log(this.velocity);
  } 
  
  Car.prototype._break = function(num){
    this.velocity -= num;
    if(this.velocity < 0){
      this.velocity = 0
    }
    console.log(this.velocity);
  } 
  
  c1 = new Car()
  
  c1.accelerate(5)
  
  c1._break(4);
  c1._break(3);
  
  let Bus = function() {
    Car.call(this);
    this.beep = function() {
      return "BEEP!"
    }
  }
  
  Bus.prototype = Object.create(Car.prototype);
  
  bus = new Bus();
  
  bus.velocity; // => 0
  
  bus.accelerate(2);
  bus.velocity; // => 2
  
  bus._break(2);
  bus.velocity; // => 0
  
  bus.beep(); // => "BEEP!"
  
  