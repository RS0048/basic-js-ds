const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  start;
  end;
  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    const list = new ListNode(value);
    if (!this.start) this.start = list;
    if (this.end) this.end.next = list;
    this.end = list;
  }

  dequeue() {
    let start = this.start;
    this.start = start.next;
    return start.value;
  }
}

module.exports = {
  Queue
};
