/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let tail = null;
    let carry = 0;

    while (l1 || l2) {
        let val1 = 0;
        let val2 = 0;
        let sum;
        let node;

        if (l1) {
            val1 = l1.val;
            l1 = l1.next;
        }

        if (l2) {
            val2 = l2.val;
            l2 = l2.next;
        }

        sum = val1 + val2 + carry;
        node = new ListNode(sum % 10);
        carry = sum >= 10 ? 1 : 0;

        if (head) {
            tail.next = node;
            tail = node;
        } else {
            head = tail = node;
        }
    }

    if (carry) {
        tail.next = new ListNode(1);
    }

    return head;
};
