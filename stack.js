// last in first out
class Stack {
    constructor() {
        this.Stack = [];
    }
    add(item) {
        this.Stack.push(item)
    }
    remove(){
        if(this.Stack.length){
            return this.Stack.pop();
        }
    }
}

const myStack = new Stack();
myStack.add('umar')
myStack.add('faruk')
myStack.add('rofik')
myStack.add('sohel')
console.log(myStack.Stack);
myStack.remove();
console.log(myStack.Stack);

