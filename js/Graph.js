class Graph{
    constructor(){
        this.edges = {}
    }

    addNode(node){
        let nodes = new Array()
        if (!this.edges[node]) {
            this.edges[node] =[]
            //nodes.push(this.edges[node])
        }
    }

    addBidirectionalEdge(n1, n2){
        this.addEdge(n1,n2)
        this.addEdge(n2, n1)
    }
    addEdge(start, end){
        this.edges[start].push(end)
    }

    getNeighbors(start){
        return this.edges[start]
    }
}

const gg = new Graph()
gg.addNode("Washington")
gg.addNode("Oregon")
gg.addNode("Idaho")
gg.addNode("Nevada")
gg.addNode("California")

gg.addBidirectionalEdge("Washington", "Oregon")
gg.addBidirectionalEdge("Washington", "Idaho")
gg.addBidirectionalEdge("Oregon", "Idaho")
gg.addBidirectionalEdge("Oregon", "California")
gg.addBidirectionalEdge("Oregon", "Nevada")
gg.addBidirectionalEdge("California", "Nevada")

console.log(gg.getNeighbors("Oregon"))


let departments = new Graph()

for(let i = 0; i < Estados.length; i++){
    departments.addNode(Estados[i].ciudad)
    for(let j = 0; j<Estados[i].vecinos.length; j++){
        departments.addBidirectionalEdge(Estados[i].ciudad, Estados[Estados[i].vecinos[j].ciudad].ciudad)
    }
}