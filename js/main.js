var tempQueue = new Queue()
var inicial = new Nodo(Estados[1])
var final = new Nodo(Estados[2])

inicial.next = Estados[1].vecinos[0]

tempQueue.enqueue(inicial)
tempQueue.enqueue(inicial.next)

tempQueue.dequeue()

console.log(tempQueue)