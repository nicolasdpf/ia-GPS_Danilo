class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Nodo(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        ++this.size
        return newNode;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


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
