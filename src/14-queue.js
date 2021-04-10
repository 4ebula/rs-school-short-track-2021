const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    let depth = 0;
    if (['next'] in this) {
      depth = 1;
      for (let i = this; i.next !== null; i = i.next, depth++);
    }
    return depth;
  }

  enqueue(element) {
    let endNode = this;
    if (this.size === 0) {
      Object.assign(endNode, new ListNode(element));
    } else {
      for (; endNode.next !== null; endNode = endNode.next);
      endNode.next = new ListNode(element);
    }
  }

  dequeue() {
    const { value, next } = this;
    if (next === null) {
      Object.assign(this, null);
    } else {
      Object.assign(this, new ListNode(next.value));
      this.next = next.next;
    }
    return value;
  }
}

module.exports = Queue;
