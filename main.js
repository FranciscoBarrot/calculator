/* VARIABLES */
let displayValue = "0"
let firstOperand = null
let operator
const displayer = document.querySelector(".displayer")
const numberBtn = document.querySelectorAll(".number")
const clearBtn = document.querySelector(".clear")
const operandBtn = document.querySelectorAll(".operation")
const equalBtn = document.querySelector(".equal")
const backspaceBtn = document.querySelector(".clear-entry")
const dotBtn = document.querySelector(".dot")

/* MAIN CODE */
numberBtn.forEach(btn => btn.addEventListener("click", display))
operandBtn.forEach(btn => btn.addEventListener("click", clickOperator))
equalBtn.addEventListener("click", clickEqual)
clearBtn.addEventListener("click", clear)
backspaceBtn.addEventListener("click", clearEntry)
dotBtn.addEventListener("click", floatNumber)

/* OPERATIONS */
function add (a,b) {
    return a + b
}

function sub (a,b) {
    return a - b
}

function multiply (a,b) {
    return a * b
}

function divide (a,b) {
    return a / b
}


function operate (a,b,operator) {
    switch (operator) {
        case "+":   
            return add(a,b)
            break
        case "-":
            return sub(a,b)
            break
        case "*":
            return multiply(a,b)
            break
        case "/":
            return divide(a,b)
            break
    }
}





/* DISPLAY */
function display(e){
    if (displayValue.length < 11){
        if ((displayValue === "NaN") || (displayValue === "0")){
            displayValue = e.target.textContent
        }
        else {
            displayValue = displayValue + e.target.textContent
        }
        displayer.textContent = displayValue
    }
}

function clear(e){
    displayValue = "0"
    displayer.textContent = displayValue
    firstOperand = null
    operator = null
}

function round(number){
    let string = number.toString()
    if (string.length > 11){
        string = string.slice(0,11)
        if (string.charAt(10) === "."){
            string = string.slice(0,10)
        }
    }
    return string
}

function floatNumber(e){
    if (displayValue.indexOf(".") === -1){
        display(e)
    }
}

function clearEntry(){
    displayValue = displayValue.slice(0,-1)
    displayer.textContent = displayValue
}


/* OPERATE */
function clickEqual(e){
    if (operator){
        /* if (!firstOperand){
            firstOperand = displayValue
        } */
        displayValue = operate(Number(firstOperand),Number(displayValue),operator)

        if (displayValue > 99999999999){
            displayValue = NaN
        }
                
        displayValue = round(displayValue)

        displayer.textContent = displayValue
        firstOperand = null
        operator = null
    }
}

function clickOperator(e){
    if (firstOperand){
        displayValue = operate(Number(firstOperand),Number(displayValue),operator)
        

        displayValue = round(displayValue)

        displayer.textContent = displayValue
    }
    firstOperand = displayValue
    operator = e.target.textContent
    displayValue = "0"
}
    
