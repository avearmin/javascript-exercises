const removeFromArray = function(inputArray, ...args) {
    for(arg of args) {
        for (item of inputArray) {
            let itemIndex = inputArray.indexOf(item);
            if (item === arg) {inputArray.splice(itemIndex, 1);}
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
