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
function display(e){
    displayValue = displayer.textContent
    displayValue *= displayValue * 10
    displayValue = displayValue + e.target.textContent
    displayer.textContent = displayValue
}


const displayer = document.querySelector(".displayer")
let displayValue

const numberBtn = document.querySelectorAll(".number")
numberBtn.forEach(btn => btn.addEventListener("click", display))