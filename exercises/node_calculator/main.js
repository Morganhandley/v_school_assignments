var add = require('./add');
var sub = require('./sub');
var mul = require('./mul');
var div = require('./div');
var exp = require('./exp');

function calculator(num1, num2, operator) {
    if (operator === 'add') {
        return add(num1, num2);
    } else if (operator === 'sub') {
        return sub(num1, num2);
    } else if (operator === 'mul') {
        return mul(num1, num2)
    } else if (operator === 'div') {
        return div(num1, num2);
    } else if (operator === 'exp') {
        return exp(num1, num2);
    }
}

console.log(calculator(5, 2, 'exp'));