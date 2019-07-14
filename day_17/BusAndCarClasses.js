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
  
  let c1 = new Car();
  console.log(c1)
  c1.accelerate(5);
  c1.velocity
  
  let b1 = new Bus();
  console.log(b1)
  b1.velocity
  b1.accelerate(10)
  b1.break(3)
  b1.velocity
  b1.beep()