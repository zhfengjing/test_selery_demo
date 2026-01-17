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
 * Reverses the nodes between positions left and right (1-indexed) in one pass.
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
  let preLeft: ListNode = dummy;

  for (let position = 1; position < left; position += 1) {
    if (preLeft.next === null) {
      return dummy.next;
    }
    preLeft = preLeft.next;
  }

  let current = preLeft.next;

  for (let position = 0; position < right - left; position += 1) {
    if (current === null || current.next === null) {
      break;
    }
    const nodeToMove = current.next;
    current.next = nodeToMove.next;
    nodeToMove.next = preLeft.next;
    preLeft.next = nodeToMove;
  }

  return dummy.next;
}

// Time complexity: O(n) where n is the number of nodes in the list.
// Space complexity: O(1) since the reversal is done in-place.
