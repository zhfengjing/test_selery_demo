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
 * Reverses the nodes of a linked list from position left to right (1-indexed).
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
  let beforeLeft: ListNode = dummy;

  for (let position = 1; position < left; position += 1) {
    if (beforeLeft.next === null) {
      return dummy.next;
    }
    beforeLeft = beforeLeft.next;
  }

  const sublistHead = beforeLeft.next;
  if (sublistHead === null) {
    return dummy.next;
  }

  let current = sublistHead.next;

  for (let position = left; position < right; position += 1) {
    if (current === null) {
      break;
    }
    sublistHead.next = current.next;
    current.next = beforeLeft.next;
    beforeLeft.next = current;
    current = sublistHead.next;
  }

  return dummy.next;
}

// Time complexity: O(n) where n is the number of nodes.
// Space complexity: O(1) since the reversal is done in-place.
