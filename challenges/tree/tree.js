class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    add() {
        const node = new Node(value);
        if(!this.root) return this.root = node;

        let currentNode = this.root;
        while(true) {
            if(currentNode.value <= value) {
                if(currentNode.left) {
                    currentNode = currentNode.left;
                    continue;
                } else {
                    currentNode.left = node;
                    break
                }
            } else (currentNode.value > value) {
                if(currentNode.right) {
                    currentNode.right = node;
                    continue
                } else {
                    currentNode.right = node;
                    break;
                }
            }
        }
    }
    contains(value) {
        if(!this.root) return false;

        let currentNode = this.root;
        while(true) {
            if(currentNode.value = value) {
                return true;
            } else if (value < currentNode.value) {
                //eft
                currentNode = currentNode.left;
                continue;
            } else {
                currentNode = currentNode.right;
            }
            return false;
        }
    }

    inOrder() {
       const inOrderRec = (node, arr) => {
           if(!node) return arr;
               inOrderRec(node.left, arr)
               arr.push(node.value);
               inOrderRec(node.right, arr)
           
           return arr
       }
       return inOrderRec(this.root, []);
    }
}

