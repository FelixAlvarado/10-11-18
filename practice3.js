class Node {
    constructor(val, left = null, right = null){
        this.val = val;
        this.right = right;
        this.left = left;
    }
}

let node7 = new Node(7);
let node6 = new Node(6);
let node5 = new Node(5);
let node4 = new Node(4);
let node3 = new Node(3, node6, node7);
let node2 = new Node(2, node4, node5);
let node1 = new Node(1, node2, node3);

//should print out 4,2,5,1,6,3,7 (could just be an array)
//write an in order  traversal iterative function that takes in node1 as the root

function inOrder(node){
    let result = [];
    let current = node;
    let stack = [];
    while(current){
        if(current.left){
            stack.push(current);
            current = current.left;
            stack[stack.length - 1].left = null;
        }else{
            result.push(current.val);
            if(current.right){current = current.right;}
            else current = stack.pop();
        }
    }
    return result;
}

console.log('should be 4,2,5,1,6,3,7', inOrder(node1));