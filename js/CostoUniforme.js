/* jshint esversion: 6*/
/**
 * 
 * 
 * **/

class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }
  
class GraphCosteado {
    constructor() {
        //La lista de adyacencia permite guardar 
        //los vertices con sus respectivas relaciones con otros vertices
        this.adjacencyList = {}; 
    }
    addVertex(vertex){
        //Si el vertice aun no está en la lista, lo añade
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        //Relaciona al vertice con otro vertice y asigna el costo de dicha arista
        this.adjacencyList[vertex1].push({node:vertex2,weight});
    }

    costoUniformeD(origen, destino){
        const nodes = new PriorityQueue(); //Priority Queue: Cola que organiza elementos segun un indice de prioridad
        const distances = {}; //Objeto donde se guardan las distancias
        const previous = {}; //Objeto que guarda todos los vertices estudiados con anterioridad
        let path = [] //Resultado
        let nodoMenor; 

        /**
         * Primero se asignan todos los vertices al objeto distancias
         * En un principio todos los nodos de la lista de adyacencia deben tener un valor infinito
         * excepto el nodo inicial, cuyo valor es cero (unico valor conocido)
         * 
         */
        for(let vertex in this.adjacencyList){ //Para cada valor de la lista de adyacencia
            if(vertex === origen){ //Si el valor es igual al vertice de inicio, añadir a cola de prioridad y objeto distancias
            //Y asignar valor cero
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                //Para los demas, valor infinito
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        //Si en la cola de nodos hay datos, ejecuta 
        while(nodes.values.length){
            //guarda el nodo más pequeño, desencolado de la cola de prioridad Nodes
            nodoMenor = nodes.dequeue().val;
            if(nodoMenor === destino){
                //si el nodo más pequeño es el vertice destino
                while(previous[nodoMenor]){
                    //Mientras exista el nodo en la lista previous, el nodo se añade a la pila path
                    path.push(nodoMenor);
                    nodoMenor = previous[nodoMenor];
                }
                break;
            } 
            if(nodoMenor || distances[nodoMenor] !== Infinity){
                for(let neighbor in this.adjacencyList[nodoMenor]){
                    //Busca todos los nodos vecinos en la lista de adyacencia del nodo de prioridad menor
                    let nextNode = this.adjacencyList[nodoMenor][neighbor];
                    //Calcula nueva distancia al Nodo vecino sumando la distancia actual+ coste del vecino
                    let candidato = distances[nodoMenor] + nextNode.weight;
                    
                    let nextNeighbor = nextNode.node;
                    if(candidato < distances[nextNeighbor]){
                        
                        distances[nextNeighbor] = candidato;
                        
                        previous[nextNeighbor] = nodoMenor;
                        
                        nodes.enqueue(nextNeighbor, candidato);
                    }
                }
            }
        }
        return path.concat(nodoMenor).reverse();     
    }


    Astar(inicio, final){
        //Nodos visitados
        let closeSet = {};
        //Nodos en fila de revision
        let openSet = new PriorityQueue();

        //Costo del nodo inicial al actual
        let gScore = {};

        //Straight line del nodo actual a la meta
        let fScore = {};

        let path = [];
        /*
        for (let vertex in this.adjacencyList) {
            if (vertex === origen) {
                gScore[vertex] = 0;
                fScore[vertex] = 0;
                openSet.enqueue(vertex, 0);
            }else{
                gScore[vertex] = Infinity;
                gScore[inicio] = 0;
                fScore[inicio] = calculateDistance(inicio, final);
            }
        }

        openSet.enqueue(inicio, 0);
        console.log(openSet);
        while(openSet){
            let current = openSet.dequeue().val;
            closeSet[current] = true;

            if(current.val === final){
                while(closeSet[current]){
                    path.push(current.val);
                }
                break;
            }
            console.log(this.adjacencyList[current]);
    
            for(let neighbor = 0; neighbor <this.adjacencyList[current].length; neighbor++){

            }
            //this.adjacencyList[current]
        }
        */
    }



    busquedaBFSIterativa(origen, destino){
        const Node = new PriorityQueue();
        Node.enqueue(origen, 0);
        const result = [];
        const visited = {};
        let currentVertex;
        visited[origen] = true;
    }
}

function calculateDistance(start, end){
    let indexStart = findIndex(start);
    let indexEnd = findIndex(end);

    start = Estados[indexStart];
    end = Estados[indexEnd];

    var R = 6371; // metres
    var φ1 = start.ubicacion.lat.toRad();
    var φ2 = end.ubicacion.lat.toRad();
    var Δφ = (end.ubicacion.lat - start.ubicacion.lat).toRad();
    var Δλ = (end.ubicacion.lng - start.ubicacion.lng).toRad();
    
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var d = R * c;
    return d;
}

Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }



function findIndex(target){
    let result;
    for(i = 0; i < Estados.length; i++){
        if(Estados[i].ciudad === target){
            result = i;
            continue;
        }
    }
    return result;
}