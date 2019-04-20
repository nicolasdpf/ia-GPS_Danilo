// class Queue{
//     constructor(){
//         this.head = null
//         this.tail = null
//     } 
//     isEmpty(){
//         return this.head  === null
//     }

//     enqueue(value){
//         let node = new Nodo(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         var result = this.head.data
//         if(this.head === this.tail){
//             this.head = null
//             this.tail = null
//         } else {
//             this.head = this.head.next
//         }
//         return result
//     }
// }

// let qq = new Queue()

// qq.enqueue(Estados[1].ciudad)
// qq.enqueue(Estados[2].ciudad)
// qq.enqueue(Estados[3].ciudad)
// qq.enqueue(Estados[4].ciudad)
// qq.enqueue(Estados[5].ciudad)

// //console.log(qq)

// //console.log(qq.dequeue())
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
