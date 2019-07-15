function Node(val) {
  this.value = val;
  this.next = undefined;
};

function LinkedList() {
  this.head = null;
	this.size = 0;
  // Adds a new item
	this.add = function(val) {
    // creates a new node
    let node = new Node(val);
    // to store current node
    let current;
    // if list is Empty add the element and make it head
    if (this.head == null) {
        this.head = node;
    } else {
      current = this.head;
      // iterate to the end of the list
      while (current.next) {
        current = current.next;
      };
      // add node
      current.next = node;
    };
    this.size++;
  };
  // Insert element at the position pos of the list
	this.insertAt = function(val, pos) {
    if (pos > 0 && pos > this.size) {
        return false;
    } else {
      // Creates a new node
      let node = new Node(val);
      let curr, prev;

      curr = this.head;
      // add the element to the first pos
      if (pos == 0) {
          node.next = head;
          this.head = node;
      } else {
        curr = this.head;
        let it = 0;
        // iterate over the list to find the position to insert
        while (it < pos) {
            it++;
            prev = curr;
            curr = curr.next;
        };
        // adding an element
        node.next = curr;
        prev.next = node;
      };
      this.size++;
    };
  };
// finds an element from a given position
  this.valueAt = function(pos) {
    let current = this.head,
        i = 0;
    // traverse the list until you reach either the end or the index
    while ((current !== null) && (i < pos)) {
        current = current.next;
        i++;
    };
    // return the data if `current` isn't null
    return current !== null
      ? current.value
      : undefined;
    };
	// Return size of the linked list
	this.length = function() {
    return console.log(this.size);
  };
  // removes an element from the specified location
	this.removeFrom = function(pos) {
    if (pos > 0 && pos > this.size) {
        return -1;
    } else {
      let curr, prev, it = 0;
      curr = this.head;
      prev = curr;
      // deleting first element
      if (pos === 0) {
          this.head = curr.next;
      } else {
        // iterate over the list to the position to remove an element
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
      return curr.element;
    };
	};
  // Reverse, recursive solution, O(n) time & O(n) space
  this.reverseLinkedList = function(curr, prev) {
    if (curr.next) {
      const newHead = reverseLinkedList(curr.next, curr);
      curr.next = prev;
      return newHead; // pass the new head up the list
    }
    curr.next = prev;
    return curr; // base case; return the tail
  };
};


let list = new LinkedList();

list.add(5);
list.add(10);
list.add(15);
list.add(20);

console.log(list);
console.log(list.valueAt(0));
console.log(list.valueAt(1));
console.log(list.valueAt(2));
console.log(list.valueAt(3));

list.length();

list.removeFrom(0);

console.log(list);

console.log(list.head)
