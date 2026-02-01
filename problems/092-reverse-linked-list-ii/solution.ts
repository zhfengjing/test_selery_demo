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
 * Reverses a sublist in-place using a one-pass head-insertion technique.
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
  let prev: ListNode = dummy;

  for (let position = 1; position < left; position += 1) {
    if (prev.next === null) {
      return dummy.next;
    }
    prev = prev.next;
  }

  let current: ListNode | null = prev.next;
  if (current === null) {
    return dummy.next;
  }

  for (let step = 0; step < right - left; step += 1) {
    const nextNode = current.next;
    if (nextNode === null) {
      break;
    }
    current.next = nextNode.next;
    nextNode.next = prev.next;
    prev.next = nextNode;
  }

  return dummy.next;
}

// Time complexity: O(n) where n is the length of the list.
// Space complexity: O(1) extra space since nodes are rearranged in-place.
