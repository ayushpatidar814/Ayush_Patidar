class Calculator {
    constructor(a, b){
        this.a = a;
        this.b = b;
    };

    add(){
        return this.a + this.b;
    };

    sub(){
        return this.a - this.b;
    };

    mul(){
        return this.a * this.b;
    };

    div(){
        if(this.b === 0){
            throw new Error("Division by zero is not allowed.")
        }
        return this.a / this.b
    }
}

const [,, input1, input2, operation] = process.argv;

if(!input1 || !input2 || !operation){
    console.log("Please run: node Problem-1.js <a> <b> <operation>");
    console.log("Example: node Problem-1.js 10 5 add");
    process.exit(1);
}

const a = parseFloat(input1);
const b = parseFloat(input2);

const calculate = new Calculator (a, b);
let final;

switch(operation.toLowerCase()){
    case "add":
        final = calculate.add();
        break;
    
    case "sub":
        final = calculate.sub();
        break;

    case "mul":
        final = calculate.mul();
        break;
    
    case "div":
        final = calculate.div();
        break;

    default:
        final = "Invalid Operation: Please use 'add', 'sub', 'mul', & 'div'";

}

console.log("Result: ", final);
