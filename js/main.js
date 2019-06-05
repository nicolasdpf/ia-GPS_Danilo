/*jshint esversion:6*/

/**
 * Con estas primeras lineas, inicializamos el grafo con todas las capitales como vertices/nodos
 * y sus respectivas aristas con las ciudades vecinas
*/
let capitales = new Graph()

for(var i = 0; i < Estados.length ; i++){
    capitales.addVertex(Estados[i].ciudad)
    for(var j = 0; j < Estados[i].vecinos.length; j++){
        var vecino = Estados[Estados[i].vecinos[j].ciudad].ciudad;
        capitales.addEdge(Estados[i].ciudad, vecino);
    }  
}

var capitalesW = new GraphCosteado();
for (let index = 0; index < Estados.length; index++) {
    capitalesW.addVertex(Estados[index].ciudad);  
    for(var j = 0; j < Estados[index].vecinos.length; j++){
      var vecino = Estados[Estados[index].vecinos[j].ciudad].ciudad;
      capitalesW.addEdge(Estados[index].ciudad, vecino,Estados[index].vecinos[j].distancia);
  }      
}

capitales.Astar("Medellin", "Cartagena");