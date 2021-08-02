/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 遍历得到链表长度，然后再遍历找到位置，时间复杂度O(n)
var getKthFromEnd = function (head, k) {
  let start = head;
  let n = 0;
  while (start) {
    n++;
    start = start.next;
  }
  while (n - k) {
    head = head.next;
    n--;
  }
  return head;
};

// 当然可以不用统计链表长度。用快慢指针能更快的解决，让快的指针先走k步，然后慢指针再走，那么等到快指针结束时，慢指针正好到目标结点
var getKthFromEnd = function (head, k) {
  let fast = head,
    slow = head;
  while (k) {
    fast = fast.next;
    k--;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};