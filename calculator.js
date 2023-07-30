//////////////////////////////////////////
// Global Variables
let operator = false;
let firstNum = false;
let secondNum = false;
let operation = '' 
let numBtns = document.querySelectorAll('.calcBtn.numBtn');
let display = document.querySelector('.displayContent');
let btns = document.querySelectorAll('.calcBtn');
let operatorBtns = document.querySelectorAll('.calcBtn.operator');
let allClearBtn = document.querySelector('.allClear');
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

// console.log(operate('/',2,3));
// console.log(operate('+',2,0));
// console.log(operate('-',2,0));
// console.log(operate('*',2,3));
// let assignNum = function(e) {
//     if (!firstNum) {
//         firstNum = e.textContent;
//         operation = operation + firstNum;
//         console.log(firstNum);
//         console.log(operation);
//     }

//     if (firstNum && operator) {
//         secondNum = e.textContent;
//         operation = operation + secondNum;
//         console.log();
//     }
// }

// let assignOperator = function(e) {
//     if (firstNum) {
//         operator = e.textContent;
//     }
//     operation = operation + ` ${operator} `;    
// }

for (let btn of numBtns) {
    btn.addEventListener('click', (e) => {
        if (!firstNum) {
            firstNum = e.target.textContent;
            operation = operation + firstNum;
            console.log(firstNum);
            console.log(operation);
        }
    
        if (firstNum && operator) {
            secondNum = e.target.textContent;
            operation = operation + secondNum;
            console.log(secondNum);
            console.log(operation);
        }
    });
}

for (let op of operatorBtns) {
    op.addEventListener('click', (e) => {
        if (firstNum) {
            operator = e.target.textContent;
        }
        operation = operation + ` ${operator} `;
        console.log(operation);
    });
}

// Clear all

let allClear = function() {
    operation = '';
    display.textContent = operation;
    firstNum = false;
    secondNum = false;
    operator = false;
    console.log(firstNum);
};

allClearBtn.addEventListener('click', allClear);

// console.log(operation);

