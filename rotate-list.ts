import {ListNode} from './datastructures';

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    // Special case: length zero or one
    if (!head || !head.next) {
        return head;
    }

    // Strategy: Find the correct position in the list for the new tail
    // Linked list length: L
    let tail = head;
    let L = 1;
    while (tail.next) {
        tail = tail.next;
        L++;
    }
    console.log(L);

    // Full rotation
    if ((k % L) === 0) return head;



    // Make the list circular.
    tail.next = head;

    // New head: L - 1 - (k % l)
    // New tail: L - 2 - (k % l)
    let newTail = head;
    for (let i = 1; i < L - (k % L); i++) {
        newTail = newTail.next!;
    }
    let newHead = newTail.next;

    // Surgery:
    newTail.next = null;

    // Return newHead
    return newHead;

};