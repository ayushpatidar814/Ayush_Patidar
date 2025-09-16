const [,, input] = process.argv;

if(!input){
    console.log("Please run: node Problem-3.js <a>");
    console.log("Example: node Problem-3.js 10");
    process.exit(1);
}

const a = parseInt(input);

if((a <= 0) || isNaN(a)){
    console.log("Please enter a positive integer.");
    process.exit(1);
}

const checkOdd = (a % 2 === 0) ? a - 1 : a;

let final = [];

for (let i = 1; i <= checkOdd; i++) {
    final.push(2 * i - 1)   
}

console.log(final.join(", "));