// First in First out
// FIFO
class Queue{
    constructor() {
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item)
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}


const myQueue = new Queue();
myQueue.enqueue('rofik');
myQueue.enqueue('sofik');
myQueue.enqueue('ahmed');
myQueue.enqueue('josim');
console.log(myQueue.queue);
myQueue.dequeue();
console.log(myQueue.queue);





