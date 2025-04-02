function calCulate(a, b, op) {
    if (op = '+') {
        return a + b;
    } else if (op == '-') {
        return a - b;
    } else if (op == '*') {
        return a * b;
    } else if (op == '/') {
        return a / b;
    } else {
        return 'Error: Invalid Operator';
    }
}

console.log(calCulate(10, 5, '+'));
console.log(calCulate(10, 5, '-'));
console.log(calCulate(10, 5, '*'));
console.log(calCulate(10, 5, '/'));
console.log(calCulate(10, 5, '%'));

function findMax(arr) {
    var max = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([3, 1, 7, 2, 5]));
