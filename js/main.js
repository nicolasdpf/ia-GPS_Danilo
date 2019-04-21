

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

let labels = (lista) =>{
  let inicial = document.getElementById(lista);
  console.log(inicial);
  let option;
  let texto;
  for (let i = 0; i < Estados.length; i++) {
      option = document.createElement("option");
      option.value = Estados[i].ciudad;
      texto = document.createTextNode("" + i + " " + Estados[i].ciudad);
      option.appendChild(texto);
      inicial.appendChild(option);
  }
}






