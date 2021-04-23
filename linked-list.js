class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = head;
    }
    add(value){
        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1400);
const mBondon = new LinkedList(head);

mBondon.add(334);
mBondon.add(23);
mBondon.add(35);
console.log(mBondon);






