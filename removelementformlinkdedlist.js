

// remove the element form the linked lis

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function removeElement(node, item) {
    if (node.data === item) {
        return node.next;
    }

    var temp = node;
    while (temp.next) {
        if (temp.next.data === item && temp.next.next) {
            temp.next = temp.next.next;
        } else if (temp.next.data === item && !temp.next.next) {
            temp.next = null;
        }
        temp = temp.next;
    }

    return node;
}

const root = new Node(100);
root.next = new Node(200);
root.next.next = new Node(300);
root.next.next.next = new Node(400);
root.next.next.next.next = new Node(500);

const itemToRemove = 300;
const updatedRoot = removeElement(root, itemToRemove);

// Display the linked list after removing the specified element
let current = updatedRoot;
while (current) {
    console.log(current.data);
    current = current.next;
}
