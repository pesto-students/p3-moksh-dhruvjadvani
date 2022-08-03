var head;
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
function push(newdata) {
    var newNode = new Node(newdata);
    newNode.next = head;
    head = newNode;
}
function detectLoop(h) {
    var s = new Set();
    while (h != null) {
        if (s.has(h))
            return true;
        s.add(h);
        h = h.next;
    }
    return false;
}
push(20);
push(14);
push(5);
push(10);
head.next.next.next.next = head;
if (detectLoop(head)) {
    console.log("Loop found");

}
else {
    console.log("Not Found");
}
