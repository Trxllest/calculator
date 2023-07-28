//////////////////////////////////////////
// Global Variables
let operator;
let firstNum;
let secondNum;




//////////////////////////////////////////

// add
function add(a, b){return a + b;}

// subtract
function subtract(a, b){return a - b;}

// multiply
function multiply(a, b){return a * b;}

// divide
let divide =  (a, b) => b === 0 ? 'Cannot divide' : a / b;

function operate(operator,num1,num2) {
    let retval = 0;
    if (operator === '/') {
        retval = divide(num1,num2);
    };
    if (operator === '+') {
        retval = add(num1,num2);
    };
    if (operator === '-') {
        retval = subtract(num1,num2);
    };
    if (operator === '*') {
        retval = multiply(num1,num2);
    };
    return Math.round(retval * 100) / 100 // limits to two decimal places if necessary
}

console.log(operate('/',2,3));
console.log(operate('+',2,0));
console.log(operate('-',2,0));
console.log(operate('*',2,3));