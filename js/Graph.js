/*jshint esversion:6*/
class Graph{
    constructor(){
        this.dataList = {}
    }
    addVertex(vertex){
        if(!this.dataList[vertex]){
            this.dataList[vertex] = [];
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
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
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
                    return dfs(neighbor);
                }
            });
        })(start);
        console.log(visited);
        return result;
    }
    busquedaDFSRecursiva(origen, destino){
        const result = [];
        const visited = {};
        const dataList = this.dataList;

        if(origen === destino){
            console.log("Destino y origen son iguales!");
            return result;
        }
        (function dfs(vertex, final){
            if(!vertex) return null;

            visited[vertex] = true;
            result.push(vertex);
            dataList[vertex].forEach(neighbor =>{
                if(!visited[neighbor]){
                    dfs(neighbor, final);
                }
            });
        })(origen, destino);

        return result;
    }
    depthFirstIterative(start){ //La funcion acepta un nodo inicial
        const stack = [start]; //Pila que ayuda a mantener seguimiento de los vertices
        const result = [];//Lista que guarda el resultado final
        const visited = {};//Objeto que guarda los vertices visitados
        let currentVertex; //Variable que guarda el vertice actual
 
        visited[start] = true; //Marca vertice inicial como visitado

        while(stack.length){ //Mientras en la pila existan datos
            console.log(stack)
            currentVertex = stack.pop(); //Sacar el siguiente Vertice de la pila
            console.log(`current: ${currentVertex}`)
            result.push(currentVertex);
            console.log(`resultado: ${result}, `)
            console.log()
            this.dataList[currentVertex].forEach(neighbor => {
                console.log(`Vecino: ${neighbor}`)
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    console.log(visited[neighbor])
                    stack.push(neighbor)
               } 
            });
        }
        console.log(visited)
        return result;
    }

    busquedaDFSIterativa(origen, destino){
        const stack = [origen];
        const result = [];
        const visited = {};
        let currentVertex, profundidad = 0;

        visited[origen] = true;
        if(origen === destino){
            console.log(`Origen es el mismo a destino!`);
            return result;
        }
        while(stack.length){ //Mientras haya datos en la pila
            
            currentVertex = stack.pop();
            result.push(currentVertex);

            if(currentVertex === destino){
                return result;
            }
            this.dataList[currentVertex].forEach(vecino => {
                if(!visited[vecino]){ //Si mi vecino no ha sido visitado
                    visited[vecino] = true;
                    stack.push(vecino);                            
                }
            });
            profundidad += 1;
        }
        return result;
    }

    busquedaBFSIterativa(start, origen){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        if( start === origen ) {
            console.log("Origen y destino son iguales");
            return null;
        }

        while(queue.length){
            currentVertex = queue.shift();
            
            result.push(currentVertex);
            if(currentVertex === origen){
                return result;
            }
            this.dataList[currentVertex].forEach( neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
            );
        }
        return result;
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


    Astar(inicial, final){
        let openList = new PriorityQueue();
        let closeList = [];

        let visited = {};

        let current; 

        let fn, gn = 0, hn;

        openList.enqueue(inicial, 0);
        visited[inicial] = true;

        while(openList){
            current = openList.dequeue();

            if(current.val === final){
                if(!visited[current]){
                    visited[current] = true;
                }

                closeList.push(current.val);
                break;
            }

            closeList.push(current.val);
            gn += 1;

            this.dataList[current.val].forEach(vecino=>{

                hn = calculateDistance(vecino, final);
                fn = gn + hn;

                if(!visited[vecino]){
                    visited[vecino] = true;
                    openList.enqueue(vecino, fn);
                }
            });
        }
        return closeList;
    }
}
