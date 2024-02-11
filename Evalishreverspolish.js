
// revers polsih problems





function evalRPN(data) {
    const stack = [];

    for (let i = 0; i < data.length; i++) {
        if (isOperator(data[i])) {
            const second = stack.pop();
            const first = stack.pop();
            stack.push(applyOperator(first, second, data[i]));
        } else {
            stack.push(Number(data[i]));
        }
    }

    return stack.pop();
}

function isOperator(token) {
    return token === '+' || token === '-' || token === '*' || token === '/';
}

function applyOperator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return Math.trunc(a / b); // Division should be integer division
    }
}

const data = [1, 2, "+", 3, "*"];
const result = evalRPN(data);
console.log(result);