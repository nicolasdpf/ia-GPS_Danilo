let departamentos = new Graph()
console.log(Estados[Estados[0].vecinos[0].ciudad].ciudad)
for(var i = 0; i < Estados.length ; i++){
    departamentos.addVertex(Estados[i].ciudad)
    for(var j = 0; j < Estados[i].vecinos.length; j++){
        var vecino = Estados[Estados[i].vecinos[j].ciudad].ciudad
        departamentos.addEdge(Estados[i].ciudad, vecino)
    }
}

console.log(departamentos)