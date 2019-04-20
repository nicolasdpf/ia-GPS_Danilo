// class Graph{
//     constructor(){
//         this.edges = {}
//     }

//     addNode(node){
//         let nodes = new Array()
//         if (!this.edges[node]) {
//             this.edges[node] =[]
//             //nodes.push(this.edges[node])
//         }
//     }

//     addBidirectionalEdge(n1, n2){
//         this.addEdge(n1,n2)
//         this.addEdge(n2, n1)
//     }
//     addEdge(start, end){
//         this.edges[start].push(end)
//     }

//     getNeighbors(start){
//         return this.edges[start]
//     }
// }

// const gg = new Graph()
// gg.addNode("Washington")
// gg.addNode("Oregon")
// gg.addNode("Idaho")
// gg.addNode("Nevada")
// gg.addNode("California")

// gg.addBidirectionalEdge("Washington", "Oregon")
// gg.addBidirectionalEdge("Washington", "Idaho")
// gg.addBidirectionalEdge("Oregon", "Idaho")
// gg.addBidirectionalEdge("Oregon", "California")
// gg.addBidirectionalEdge("Oregon", "Nevada")
// gg.addBidirectionalEdge("California", "Nevada")

// console.log(gg.getNeighbors("Oregon"))


// let departments = new Graph()

// for(let i = 0; i < Estados.length; i++){
//     departments.addNode(Estados[i].ciudad)
//     for(let j = 0; j<Estados[i].vecinos.length; j++){
//         departments.addBidirectionalEdge(Estados[i].ciudad, Estados[Estados[i].vecinos[j].ciudad].ciudad)
//     }
// }


class Graph{
    constructor(){
        this.dataList = {}
    }
    addVertex(vertex){
        if(!this.dataList[vertex]){
            this.dataList[vertex] = []
        }
    }

    addEdge(v1, v2){
        this.dataList[v1].push(v2)
        //this.dataList[v2].push(v1)
    }

    removeEdge(vertex1, vertex2)
    {
        this.dataList[vertex1] = this.dataList[vertex1].filter(
            v => v !== vertex2
        )
        this.dataList[vertex2] = this.dataList[vertex2].filter(
            v => v !== vertex1
        )
    }


    depthFirstRecursive(start){
        const result = []
        const visited = {}
        const dataList = this.dataList;

        (function dfs(vertex){
            if(!vertex) return null
            visited[vertex] = true;
            result.push(vertex)
            dataList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);
        return result
    }
    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
           

            this.dataList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}
