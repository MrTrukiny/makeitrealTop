function Node(data, next = null) {
  this.data = data;
  this.next = next;
};

function Queue() {
  this.head = null;
  this.size = 0;

  // Adds and item to the queue (at the end)
  this.enqueue = function(data) {
    let node = new Node(data);
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
  };
  // Removes and item from the queue (first item)
  this.dequeue = function() {
    let remove;
    if (this.size == 0) {
      return "The Queue is empty";
    } else {
      remove = this.head.data;
      this.head = this.head.next;
    } 
    this.size--
    return remove;
  }

  // Show the size of the Queue
  this.length = function() {
    return this.size;
  }
}

const q1 = new Queue();

console.log(q1.dequeue());
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
console.log(q1);
console.log(q1.length());
console.log(q1.dequeue());
console.log(q1);
console.log(q1.length());