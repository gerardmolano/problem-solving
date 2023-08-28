/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 }

class AddTwoNumbers {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode head = null;
        ListNode tail = null;
        int carry = 0;

        while (l1 != null || l2 != null) {
            int val1 = 0;
            int val2 = 0;
            int sum;
            ListNode node;

            if (l1 != null) {
                val1 = l1.val;
                l1 = l1.next;
            }

            if (l2 != null) {
                val2 = l2.val;
                l2 = l2.next;
            }

            sum = val1 + val2 + carry;
            node = new ListNode(sum % 10);
            carry = sum >= 10 ? 1 : 0;

            if (head == null) {
                head = tail = node;
            } else {
                tail.next = node;
                tail = node;
            }
        }

        if (carry == 1) {
            tail.next = new ListNode(1);
        }

        return head;
    }
}
