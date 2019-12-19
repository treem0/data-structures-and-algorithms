class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class DogStack {
    constructor() {
        this.top = null;
    }
  
    push(dog) {
        const node = new Node(dog, this.top);
        this.top = node;
    }
  
    pop() {
        if(!this.top) return null;
  
        const top = this.top;
        this.top = top.next;
        return top;
    }
  
    peek() {
        if(!this.top) return null;
        return this.top.value;
    }
}

class CatStack {
    constructor() {
        this.top = null;
    }
  
    push(cat) {
        const node = new Node(cat, this.top);
        this.top = node;
    }
  
    pop() {
        if(!this.top) return null;
  
        const top = this.top;
        this.top = top.next;
        return top;
    }
  
    peek() {
        if(!this.top) return null;
        return this.top.value;
    }
}

class AnimalShelter {
    constructor() {
        this.front = null;
        this.back = null;
    }
  
    enqueue(animal) {
        const node = new Node(animal, null);
        if(this.isEmpty()) {
            this.front = node;
        } else {
            this.back.next = node;
        }
        this.back = node;
    }
  
    dequeue() {
        if(this.isEmpty()) return null;
  
        const front = this.front;
        this.front = this.front.next;
        if(this.isEmpty()) this.back = null;
  
        return front;
    }
  
}

        class Animal {
            constructor(type) {
                this.type = type;
            }
        }
        
        class Dog extends Animal {
            constructor(type) {
                super(type);
                type = 'dog'
            }
        }
        
        class Cat extends Animal {
            constructor(type) {
                super(type);
                type = 'cat'
            }

        }

        class AnimalShelter {
            constructor(animal) {
                if (animal !== 'dog' || animal !== 'cat')
                return null;
            }

            enqueue(animal) {
                const node = new Animal(type, null);
                    if(this.isEmpty()) {
                        this.front = node;
                    } else {
                        this.back.next = node;
                    }
                        this.back = node;
                    }
            dequeue() {
                    if(this.isEmpty()) return null;
                  
                    const front = this.front;
                    this.front = this.front.next;
                    if(this.isEmpty()) this.back = null;
                  
                    return front;
                }        
            }
