/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(linkedList) {
    let head = linkedList;
    
    const arr = [];
    
    while(head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    
    let head2 = linkedList;
    
    for(let i = arr.length - 1; i >= 0 ; i--) {
        head2.val = arr[i];
        head2 = head2.next;
    }
    
    return linkedList;
};
