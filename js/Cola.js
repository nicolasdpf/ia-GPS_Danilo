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
        this.size = 0
    } 
    isEmpty(){
        return this.front  === null
    }

    enqueue(value){
        var node = new myNode(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    dequeue(){
        if(this.head === null){
            return null
        }
        var result = this.front.data
        if(this.front === this.tail){
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
        }
        return result
    }
}