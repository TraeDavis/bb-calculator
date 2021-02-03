var num1 = Number(prompt("Enter your first number:"));
var num2 = Number(prompt("Enter your second number:"));

function multi(){
    multiResult = num1 * num2;
    return `<p>${num1} * ${num2} = ${multiResult}</p>` ;
}
function sum(){
    sumResult = num1 + num2;
    return `<p>${num1} + ${num2} = ${sumResult}</p>` ;
}
function sub(){
    subResult = num1 - num2;
    return `<p>${num1} - ${num2} = ${subResult}</p>` ;
}
function divide(){
    divResult = num1 / num2;
    return `<p>${num1} / ${num2} = ${divResult}</p>` ;
}
document.querySelector('.java').innerHTML = multi() + sum() + sub() + divide();
