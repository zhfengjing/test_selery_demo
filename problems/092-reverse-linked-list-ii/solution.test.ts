import assert from 'node:assert/strict';
import { ListNode, reverseBetween } from './solution';

function buildList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  for (const value of values) {
    const node = new ListNode(value);
    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail!.next = node;
      tail = node;
    }
  }

  return head;
}

function toArray(head: ListNode | null): number[] {
  const values: number[] = [];
  let current = head;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
}

function runTest(
  name: string,
  values: number[],
  left: number,
  right: number,
  expected: number[]
): void {
  const head = buildList(values);
  const result = reverseBetween(head, left, right);
  assert.deepStrictEqual(toArray(result), expected, `${name} failed`);
  console.log(`✓ ${name}`);
}

runTest('reverse entire list', [1, 2, 3, 4, 5], 1, 5, [5, 4, 3, 2, 1]);
runTest('reverse from head', [1, 2, 3, 4], 1, 3, [3, 2, 1, 4]);
runTest('reverse to tail', [1, 2, 3, 4, 5], 3, 5, [1, 2, 5, 4, 3]);
runTest('reverse single node', [7, 8, 9], 2, 2, [7, 8, 9]);
runTest('reverse middle section', [1, 2, 3, 4, 5], 2, 4, [1, 4, 3, 2, 5]);
