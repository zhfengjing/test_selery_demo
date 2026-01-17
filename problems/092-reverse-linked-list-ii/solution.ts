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
 * Reverses the nodes from position left to right (1-indexed) in a single pass.
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
  let prev: ListNode | null = dummy;

  for (let position = 1; position < left; position += 1) {
    prev = prev!.next;
  }

  const sublistTail = prev!.next;
  let current = sublistTail!.next;

  for (let position = left; position < right; position += 1) {
    const nextNode = current!.next;
    current!.next = prev!.next;
    prev!.next = current;
    sublistTail!.next = nextNode;
    current = nextNode;
  }

  return dummy.next;
}

// Time complexity: O(n) where n is the number of nodes in the list.
// Space complexity: O(1) since the reversal is done in-place.
