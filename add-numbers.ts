/**
 * Definition for singly-linked list.
 */
import { ListNode } from './datastructures';


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // Handle special cases
  if (!l1 && !l2) {
    return null;
  }

  // Traverse the input lists and compute the sum (as a number!)
  let l1curr = l1;
  let l2curr = l2;
  let sum = 0;
  let multiplier = 1; // Current digit

  while (l1curr || l2curr) {
    if (l1curr) {
      sum += multiplier * l1curr.val;
      l1curr = l1curr.next;
    }
    if (l2curr) {
      sum += multiplier * l2curr.val;
      l2curr = l2curr.next;
    }
    multiplier *= 10;
  }

  console.log(sum);



  let head = new ListNode(sum % 10);
  let tail = head;
  sum = Math.floor(sum / 10);


  while (sum !== 0) {
    tail.next = new ListNode(sum % 10);
    tail = tail.next;
    sum = Math.floor(sum / 10);
  }

  return head;

};


const addTwoNumbers2 = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  let carry = 0;
  let head = new ListNode(-1);
  let curr = head;

  while (l1 || l2 || carry !== 0) {
    // Compute sum of current digits (add carry)
    let val = l1 ? l1.val : 0;
    val += l2 ? l2.val : 0;
    val += carry;
    carry = Math.floor(val / 10);
    // Add next digit to result list and increment pointers
    curr.next = new ListNode(val % 10);
    curr = curr.next;
    l1 = l1? l1.next : null;
    l2 = l2? l2.next : null;
  }

  return head.next;

};