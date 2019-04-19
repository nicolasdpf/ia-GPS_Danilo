class TreeNode{
    constructor(data, left = null, right = null){
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    collect(){
        return this._collect(this.root, []);
    }

    _collect(current, nodes){
        if(current === null){
            return nodes
        }
        
        nodes.push(current.data)
        this._collect(current.left, nodes)
        this._collect(current.right, nodes)

        return nodes
    }
}

let n1 = new TreeNode(12)
let n2 = new TreeNode(92)
let n3 = new TreeNode(13)
let n4 = new TreeNode(44)
let n5 = new TreeNode(87)

let tree = new Tree()
tree.root = n1
n1.left = n2
n1.right = n3
n3.right = n4
n4.left = n5


//console.log(tree.collect())