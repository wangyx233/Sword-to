/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 时间复杂度O(l1 + l2)，空间O(1)
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(0);
  let head = dummy;
  while (l1 || l2) {
    if (!l1) {
      dummy.next = l2;
      l2 = null;
    } else if (!l2) {
      dummy.next = l1;
      l1 = null;
    } else {
      if (l1.val < l2.val) {
        dummy.next = l1;
        l1 = l1.next;
      } else {
        dummy.next = l2;
        l2 = l2.next;
      }
      dummy = dummy.next;
    }
  }
  return head.next;
};

var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(0);
  let head = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }
  dummy.next = l1 || l2;
  return head.next;
};