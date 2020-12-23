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


function operate (operator,a,b) {
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
        default:
            return divide(a,b)
            break
    }
}


/* DISPLAY */
/* FUNCTIONS */
function display(e){
    displayValue = displayer.textContent
    if (displayValue === "0"){
        displayValue = e.target.textContent
    }
    else {
    displayValue = displayValue + e.target.textContent
    }
    displayer.textContent = displayValue
}

function clear(e){
    displayValue = 0
    displayer.textContent = displayValue
}

/* MAIN CODE */
const displayer = document.querySelector(".displayer")
let displayValue

const numberBtn = document.querySelectorAll(".number")
numberBtn.forEach(btn => btn.addEventListener("click", display))

const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", clear)