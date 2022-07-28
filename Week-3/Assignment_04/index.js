function createStack() {
    const items = [];
    return {
        push: function push(item) {
            items.push(item);
        },
        pop: function pop() {
            return items.pop();
        },
        peek: function peek() {
            return items[items.length - 1];
        },

        print: function print() {
            items.forEach(item => console.log(item));
        }
        
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.push(15);
stack.push(25);
stack.push(35);
stack.push(45);

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.peek());

stack.print();

stack.items;

