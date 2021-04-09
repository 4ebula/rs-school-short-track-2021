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
    console.log('THIS', this, '\n\n');
  }

  get size() {
    let depth = 0;
    for (let i = this; i.next !== null; i = this.next, depth++);
    return depth;
  }

  enqueue(element) {
    const depth = this.size;
    let endNode = this;
    for (let i = 0; i < depth; endNode = this.next, i++);
    console.log('THIS endnode', endNode, 'End of this');
    endNode.next = new ListNode(element);
    console.log(this);
  }

  dequeue() {
    return this.next;
    // throw new Error('Not implemented');
  }
}

module.exports = Queue;
