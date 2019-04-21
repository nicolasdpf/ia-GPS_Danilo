class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Nodo(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        ++this.size
        return newNode;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

// const queue = new Queue()
// queue.enqueue(Estados[0].ciudad)
// queue.enqueue("B")
// queue.enqueue("C")
// queue.enqueue("D")
// queue.enqueue("E")
// queue.enqueue("F")


// let v = queue.dequeue();
// //console.log(queue)
// //console.log(queue.dequeue())
