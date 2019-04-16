class List{
    constructor(){
        console.log('List Created')
        this.data = new Array(10)
        this.size = 0
    }

    //add the value to the first-most free position
    //in the data array
    push(value){ 
        if(this.size === this.data.length){
            this.grow()
        }
        this.data[this.size] = value
        this.size++
    }

    grow(){
        let aa = new Array(this.data.length * 2)

        for( let i = 0; i < this.data.length; i++){
            aa[i] = this.data[i]
        }
        console.log('growing from ', this.data.length, "to", aa.length)
        //set the larger area as the data for the list
        this.data == aa
    }
    
    toString(){
        if(this.size === 0){
            return "[]"
        }else {
            let result = ""
            for(let i = 0; i < this.size; i++){
                result += this.data[i] + " "
            }
            return "[" + result + "]"
        }
    }
}

const ll = new List()
for(let i = 0; i< 100; i++){
    ll.push(i+1)
}

console.log('str', ll.toString())
console.log('data: ', ll.data)