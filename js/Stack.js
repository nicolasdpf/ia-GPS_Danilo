class StackNode{
    constructor(data, next)
    {
        this.data = data
        this.next = next
    }
}

class ArrayStack{
    constructor(){
        this.data = new Array(20)
        this.size = 0
    }

    isEmpty()
    {
        return this.size === 0
    }

    lenght(){
        return this.size
    }

    push(value){

        if(this.size === this.data.lenght){
           this.grow() 
        }
        this.data[this.size] = value
        this.size++
    }

    pop(){
        let result = this.data [this.size - 1]
        this.data [this.size - 1] = null
        this.size--

        return result
    }

    peek(){
        return this.data[this.size - 1]
    }

    grow(){
        let data = new Array(this.data.length * 2)
        for(let i = 0 ; i < this.data.length; i++){
            data[i] = this.data[i]
        }
        this.data = data
    }
}

let ss = new ArrayStack()
ss.push(55)
ss.push(44)
ss.push(33)
ss.push(22)
ss.push(11)

let last = ss.pop()
console.log(last)
console.log(ss)

// while (!ss.isEmpty()) {
//     let value = ss.pop()
//     console.log(value)
// }
// class StackNode{
//     constructor(data, next)
//     {
//         this.data = data
//         this.next = next
//     }
// }

// class LinkedStack{
//     constructor(){
//         this.top = null
//         this.size = 0
//     }

//     isEmpty()
//     {
//         return this.top === null
//     }

//     lenght(){
//         return this.size
//     }

//     push(value){
//         let node  = new StackNode(value)
//         node.next = this.top
//         this.top = node

//         this.size ++
//     }

//     pop(){
//         let result = this.top
//         this.top = this.top.next

//         this.size--
//         return result.data
//     }
// }

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

