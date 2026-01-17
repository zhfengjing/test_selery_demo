/**
 * Definition for singly-linked list nodes.
 */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Reverses a sublist in-place from position left to right (1-indexed).
 */
export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (head === null || left === right) {
    return head;
  }

  const dummy = new ListNode(0, head);
  let beforeLeft: ListNode | null = dummy;

  for (let position = 1; position < left; position++) {
    beforeLeft = beforeLeft!.next;
  }

  let sublistHead = beforeLeft!.next;
  let nodeToMove = sublistHead!.next;

  for (let i = 0; i < right - left; i++) {
    sublistHead!.next = nodeToMove!.next;
    nodeToMove!.next = beforeLeft!.next;
    beforeLeft!.next = nodeToMove;
    nodeToMove = sublistHead!.next;
  }

  return dummy.next;
}

// Time complexity: O(n) where n is the length of the list.
// Space complexity: O(1) extra space by reversing in-place.
