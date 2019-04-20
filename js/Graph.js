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
