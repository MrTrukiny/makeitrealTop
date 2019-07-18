class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(data, left = null, right = null) {
    let Node = {
      data,
      left,
      right
    };

    let currentNumberNode;

    if (!this.root) {
      //if its not a root make it one by passing a Node
      this.root = Node;
    } else {
      //and if its a root now, assign it to currentNumberNode
      currentNumberNode = this.root;
      while (currentNumberNode) {
        //if data is smaller than cuurent data, send it in left subtree
        if (data < currentNumberNode.data) {
          //if current num node don't have Node properties
          //we will assign it node properties
          if (!currentNumberNode.left) {
            currentNumberNode.left = Node;
            break;
          } else {
            //if it has node properties and it is sent by root to left
            //we will make it a left node because it is smaller than root node
            currentNumberNode = currentNumberNode.left;
          }
          //if data is larger than current data, send it in right subtree
        } else if (data > currentNumberNode.data) {
          //if current num node don't have Node properties
          //we will assign it node properties
          if (!currentNumberNode.right) {
            currentNumberNode.right = Node;
            break;
          } else {
            //if it has node properties and it is sent by root to right
            //we will make it a right node because it is larger than root node
            currentNumberNode = currentNumberNode.right;
          }
        } else {
          console.log("Try Different Value");
          break;
        }
      }
    }
  }

  traverseBFS() {
    let node = this.root;
    const queue = [node];
    const finalData = [ ]

    while(queue.length){
      node = queue.shift()
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
      finalData.push(node.data)
    }
    return finalData
 }

  traverseDFS() {
    // final preorder list
    const finalData = [];

    const traverse = node => {
      // push the data
      finalData.push(node.data)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }

    traverse(this.root);
    return finalData;
  }

  reverse(node) {
    const invertTree = (root) => {
      if (root) {
          let tmp = root.left;
          root.left = invertTree(root.right);
          root.right = invertTree(tmp);
      }
      return root;
    }
    return invertTree(node.root);
  }

  pathSum(tree, num) {
    const hasPathSum = (root, sum) => {
      if (!root) {
        return false;
      } else if (!root.left && !root.right && root.data === sum) {
        return true;
      } else {
        return hasPathSum(root.left, sum - root.data) || hasPathSum(root.right, sum - root.data)
      }
    }
    return hasPathSum(tree.root, num);
  }
  
}

let bT = new BinaryTree();

//tests

bT.add(4);
bT.add(2);
bT.add(7);
bT.add(1);
bT.add(3);
bT.add(5);
bT.add(9);

console.log(bT);

console.log(bT.traverseBFS());
console.log(bT.traverseDFS());
console.log(bT.reverse(bT));
console.log(bT.pathSum(bT, 13));
console.log(bT.pathSum(bT, 7));
