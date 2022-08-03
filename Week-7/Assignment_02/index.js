
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val, k) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
        return this;

    }
    rotateLL(k) {
        var current = this.head;
        var count = 1;
        while (count < k && current != null) {
            current = current.next;
            count++;
        }
        var breakNode = current;
        while (current.next != null)
            current = current.next;
        current.next = this.head;
        this.head = breakNode.next;
        breakNode.next = null;

        return this;
    }
    print() {
        var arr = [];
        var current = this.head;
        var prev;
        while (current) {
            arr.push(current.val)
            prev = current
            current = current.next
            console.log(prev.val)
        }
        console.log(arr)
    }
}

var list = new Linkedlist();

list.push("2");
list.push("4");
list.push("7");
list.push("8");
list.push("9");
list.print();
list.rotateLL(3);
list.print();




