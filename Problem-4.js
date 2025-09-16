const [,, input] = process.argv;

if(!input){
    console.log("Please run: node Problem-4.js <comma separated numbers>");
    console.log("Example: node Problem-4.js 1,2,8,9,12,46,76,82,15,20,30");
    process.exit(1);
}

const diviser = [1,2,3,4,5,6,7,8,9];
const number = input.split(",").map((item) => parseInt(item.trim())).filter((item) => !isNaN(item));

let count = {};

diviser.forEach((divi) => {
    count[divi] = number.filter((num) => num % divi === 0).length;
})

console.log(count);