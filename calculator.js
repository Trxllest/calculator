//////////////////////////////////////////
// Global Variables
let operator = '';
let firstNum = '';
let secondNum = '';
let operation = '' 
let numBtns = document.querySelectorAll('.calcBtn.numBtn');
let display = document.querySelector('.displayContent');
let btns = document.querySelectorAll('.calcBtn');
let operatorBtns = document.querySelectorAll('.calcBtn.operator');
let allClearBtn = document.querySelector('.allClear');
let clearBtn = document.querySelector('.clear');
let currentResult = 0;
let equalBtn = document.getElementById('equal');
let decimalBtn = document.querySelector('.calcBtn.decimal')
//////////////////////////////////////////

// add
function add(a, b){return a + b;}

// subtract
function subtract(a, b){return a - b;}

// multiply
function multiply(a, b){return a * b;}

// divide
let divide =  (a, b) => b === 0 ? false : a / b;

function operate(operator,num1,num2) {
    let retval = 0;
    if (firstNum !== '' && secondNum !== '') {
        if (operator === '÷') {
            let val = divide(num1,num2);
            if (!val) {
                alert('You cannot divide by zero, silly :)... Try again!');
                return false;
            } else {
                retval = val;
            }
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
    } else {
        return currentResult;
    }
}


function setNumbers(e) {
        if (!operator) {
            firstNum = firstNum + e.target.textContent;
            operation = firstNum;
        }
    
        if (firstNum !== '' && operator) {
            secondNum = secondNum + e.target.textContent;
            operation = firstNum + ` ${operator} ` + secondNum;
        }
        display.textContent = operation;
}

function addDecimal(e) { // Decimal logic
    if (!operator && !firstNum.includes('.')) {
        firstNum = firstNum + e.target.textContent;
        operation = firstNum;
    }

    if (firstNum !== '' && operator && !secondNum.includes('.')) {
        secondNum = secondNum + e.target.textContent;
        operation = firstNum + ` ${operator} ` + secondNum;
    }
    display.textContent = operation;
}

decimalBtn.addEventListener('click', addDecimal)

function setOperator(e) {
    if (firstNum !== '' && operator === '') {
        operator = e.target.textContent;
        operation = operation + ` ${operator} `;
    }

    if (firstNum !== '' && operator !== '' && secondNum === '') {
        operator = e.target.textContent;
        operation = firstNum + ` ${operator} `;
    }

    if (firstNum !== '' && operator !== '' && secondNum !== '') {
        doOperation();
        operator = e.target.textContent;
    }

    display.textContent = operation;    
}

for (let op of operatorBtns) {
    op.addEventListener('click', setOperator);
}

for (let btn of numBtns) {
    btn.addEventListener('click', setNumbers)
}

// Clear all
let allClear = () => {
    operation = '';
    display.textContent = operation;
    firstNum = '';
    secondNum = '';
    operator = '';
    currentResult = 0;
};

// Clear
let clearEntry = () => {
    if (firstNum && operator && secondNum) {
        secondNum = '';
        operation = firstNum + ` ${operator} `;
        display.textContent = operation;
    } else if (firstNum && operator) {
        operator = '';
        operation = firstNum;
        display.textContent = operation;
    } else {
        firstNum = '';
        operation = firstNum;
        display.textContent = operation;
    }
}

allClearBtn.addEventListener('click', allClear);

clearBtn.addEventListener('click', clearEntry);

let doOperation = () => {
    currentResult = operate(operator, Number(firstNum), Number(secondNum));
    if (!currentResult) {
        secondNum = ''
        operation = firstNum + ` ${operator} `;
        display.textContent = operation;
        return
    } else {
        console.log(currentResult);
        operation = String(currentResult);
        display.textContent = operation;
        firstNum = operation;
        secondNum = '';
        //operator = ''
    }
}

equalBtn.addEventListener('click', doOperation);

