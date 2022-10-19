function  Queue () {
    this.elements = [];
}

// add on element

Queue.prototype.enqueue = function (e) {
    this.elements.push(e);
};

// remove on element from the front of the queue
 
Queue.prototype.dequeue = function () {
    this.elements.shift();
};

// check if the queue is  empty  

Queue.prototype.isEmpty = function () {
    return this.elements.length == 0;
};

// peek 
// get the element at the front of the queue

Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined; 
};

// to query the length of a queue

Queue.prototype.length = function () {
    return this.elements.length;
};

// to create a new queue

let q = new Queue ();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.dequeue();
console.log(q.isEmpty());