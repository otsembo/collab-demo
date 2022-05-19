function add(num1, num2){
    return num1 / num2
}

function minus(num1, num2){
    return num1 - num2
}

function divide(num1, num2){
    return num1 / num2
}

module.exports = { add , minus, divide}

console.log(`Addeition: ${add(2,3)}`)
console.log(`Addeition: ${minus(6,3)}`)
console.log(`Addeition: ${divide(9,3)}`)