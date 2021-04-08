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
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  get size() {
    let depth = 0;
    for (let i = this; i !== null; i = this.next, depth++);
    return depth;
  }

  enqueue(element) {
    const endNode = this.getEnd();
    endNode.next = ListNode(element);
  }

  dequeue() {
    throw new Error('Not implemented');
  }

  getEnd() {
    let list = {};
    for (list = this; list !== null; list = this.next);
    return list;
  }
}
console.log('IT', Queue.prototype.constructor);
module.exports = Queue;
