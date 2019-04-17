class List{
    constructor(){
        console.log('List Created')
        this.data = new Array(10)
        this.size = 0
    }
    /**
     *  A simple method that return the value at the 
     * specified index, if the index is within the valid range of elements
     * in the list. Returns null if someone tries to acces an index out
     * of range of the list
     */
    get(index){
        if(index < this.size){
            return this.data[index]
        }
        return null
    }
    /**
     * Overwrites the value at the specified index,
     * and the index must be within a valid range of the 
     * current size of the list.
     */
    set(index, value){
        if(index >= 0 && index < this.size){
            this.data[index] = value
        }
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
    remove(removeIndex){

        if(this.size === 0){
            return null
        }
        let removed = this.data[removeIndex]
        for(let i = removeIndex; i < this.size -1 ; i ++){
            this.data[i] = this.data[i + 1]
        }

        //manually overwrite the now-stale data

        this.data[this.size - 1] = null
        this.size--
        return removed
    }

    add(index, value){
        if(this.size === this.data.length){
            this.grow();
        }

        for(let i = this.size; i > index; i-- ){
            this.data[i] = this.data[i - 1]
        }
        this.data[index] = value
        this.size++
    }
    grow(){
        let aa = new Array(this.data.length * 2)

        for( let i = 0; i < this.data.length; i++){
            aa[i] = this.data[i]
        }
        //set the larger area as the data for the list
        this.data = aa
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
