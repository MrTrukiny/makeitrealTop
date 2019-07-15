function Node(data) {
  this.data = data;
  this.next = null;
};

function Stack() {
  this.head = null;
  this.size = 0;

  this.push = function(data) {
    const node = new Node(data);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      };
      current.next = node;
    };
    this.size++;
  }

  this.pop = function() {
    let pos = this.size-1;
    if (this.head == null) {
      return "The Stack is empty";
    } else {
      let curr, prev, it = 0;
      curr = this.head;
      prev = curr;
      // deleting first element
      if (pos === 0) {
          this.head = null;
      } else {
        // iterate over the list to the position to remove the last element
        while (it < pos) {
            it++;
            prev = curr;
            curr = curr.next;
        };
        // remove the element
        prev.next = curr.next;
      };
      this.size--;
      // return the remove element
      return curr.data;
    };
  };

  // Show the size of the Stack
  this.length = function() {
    return this.size;
  }
};
const hanoiTower = (a, b, c) => {

  t1 = new Stack();
  t2 = new Stack();
  t3 = new Stack();

  a.forEach(e => t1.push(e));

  console.log(t1, t2, t3)

  t2.push(t1.pop());
  t3.push(t1.pop());
  t3.push(t2.pop());
  t2.push(t1.pop());
  t1.push(t3.pop());
  t2.push(t3.pop());
  t2.push(t1.pop());
  t3.push(t1.pop());
  t3.push(t2.pop());
  t1.push(t2.pop());
  t1.push(t3.pop());
  t3.push(t2.pop());
  t2.push(t1.pop());
  t3.push(t1.pop());
  t3.push(t2.pop())

  return console.log(t1, t2, t3);
};

const a = [4, 3, 2, 1];
const b = [];
const c = [];

hanoiTower(a, b, c);


