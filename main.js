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