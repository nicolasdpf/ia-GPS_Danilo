class StackNode{
    constructor(data, next)
    {
        this.data = data
        this.next = next
    }
}

class LinkedStack{
    constructor(){
        this.top = null
        this.size = 0
    }

    isEmpty()
    {
        return this.top === null
    }

    lenght(){
        return this.size
    }

    push(value){
        let node  = new StackNode(value)
        node.next = this.top
        this.top = node

        this.size ++
    }

    pop(){
        let result = this.top
        this.top = this.top.next

        this.size--
        return result.data
    }
}

// let ss = new LinkedStack()
// ss.push(55)
// ss.push(44)
// ss.push(33)
// ss.push(22)
// ss.push(11)

// console.log(ss)

// while(!ss.isEmpty()){
//     let value = ss.pop()
//     console.log(value)
// }

