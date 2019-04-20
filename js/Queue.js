class myNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
    } 
    isEmpty(){
        return this.head  === null
    }

    enqueue(value){
        let node = new myNode(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        var result = this.head.data
        if(this.head === this.tail){
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
        }
        return result
    }
}

let qq = new Queue()

qq.enqueue(Estados[1].ciudad)
qq.enqueue(Estados[2].ciudad)
qq.enqueue(Estados[3].ciudad)
qq.enqueue(Estados[4].ciudad)
qq.enqueue(Estados[5].ciudad)

