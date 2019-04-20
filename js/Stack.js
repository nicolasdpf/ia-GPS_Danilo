class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push (val){
        var newNode = new Nodo(val)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        console.log(newNode.next)
        return ++this.size;
    }

    pop(){
        if(!this.first) return null
        var temp = this.first;
        if (this.fist === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
