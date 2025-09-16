const [,, input] = process.argv;

if(!input){
    console.log("Please run: node Problem-2.js <a>");
    console.log("Example: node Problem-2.js 10");
    process.exit(1);
}

const a = parseInt(input);

if((a <= 0) || isNaN(a)){
    console.log("Please enter a positive integer.");
    process.exit(1);
}

let final = [];

for (let i = 1; i <= a; i++) {
    final.push(2 * i - 1)   
}

console.log(final.join(", "));