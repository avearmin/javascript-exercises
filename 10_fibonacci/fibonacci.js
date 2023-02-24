const fibonacci = function(position) {
    let fibonacciArray = [1, 1];
    if (position < 0) return "OOPS";
    else {
        for (i = 2; i < position; i++) {
            fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i-2]);
        }
    return fibonacciArray[fibonacciArray.length - 1];
    }
};
fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
